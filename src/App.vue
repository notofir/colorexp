<template>
  <div class="container text-center main-container">
    <div
      v-if="Boolean('IS DEV PLACEHOLDER FOR QUALTRICS')"
      class="form-check form-switch position-absolute top-0 start-0"
    >
      <div>
        <input
          @click="isExperimental = !isExperimental"
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Condition: {{ isExperimental ? "experimental" : "control" }}</label
        >
      </div>
      <div>
        <input v-model="uid" class="form-text-input" type="input" />
      </div>
    </div>

    <div
      class="row align-items-center justify-content-center"
      style="height: 100%"
    >
      <div class="col p-0" style="height: 100%">
        <component
          @instructions-finish="instructionsFinish"
          @scatter-finish="scatterFinish"
          @colors-finish="colorsFinish"
          @survey-finish="surveyFinish"
          :is="currentComponent"
          :key="this.trialIndex"
          v-bind="currentProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Instructions from "./components/Instructions.vue";
import ScatterSurvey from "./components/scattertask/ScatterSurvey.vue";
import ScatterTrial from "./components/scattertask/ScatterTrial.vue";
import ColorsTrial from "./components/colorstask/ColorsTrial.vue";
import phases from "./phases";
import postResults from "./qualtrics";

export default {
  name: "App",
  components: {
    Instructions,
    ScatterTrial,
    ColorsTrial,
    ScatterSurvey,
  },
  data() {
    let records = new Array(phases.length);
    for (let i = 0; i < records.length; i++) {
      records[i] = new Array(phases[i].numberOfTrials);
      for (let j = 0; j < records[i].length; j++) {
        records[i][j] = new Object();
      }
    }

    return {
      currentComponentName: Instructions.name,
      isExperimental: Boolean("IS EXPERIMENTAL PLACEHOLDER FOR QUALTRICS"),
      uid: "PARTICIPANT ID PLACEHOLDER FOR QUALTRICS",
      phaseIndex: 0,
      trialIndex: 0,
      records: records,
    };
  },
  computed: {
    currentComponent() {
      return this.currentComponentName;
    },
    currentProps() {
      switch (this.currentComponentName) {
        case Instructions.name:
          return {
            phaseIndex: this.phaseIndex,
            isDone: this.isDone(),
            isExperimental: this.isExperimental,
          };
        case ColorsTrial.name:
          return {
            phaseIndex: this.phaseIndex,
            trialIndex: this.trialIndex,
            isExperimental: this.isExperimental,
          };
        case ScatterTrial.name:
          return { phaseIndex: this.phaseIndex, trialIndex: this.trialIndex };
        case ScatterSurvey.name:
          return {
            phaseIndex: this.phaseIndex,
            trialIndex: this.trialIndex,
            isExperimental: this.isExperimental,
          };
        default:
          return {};
      }
    },
  },
  methods: {
    instructionsFinish() {
      this.currentComponentName = phases[this.phaseIndex].taskName;
    },
    colorsFinish(record) {
      this.records[this.phaseIndex][this.trialIndex] = record;
      this.advance(ColorsTrial);
    },
    scatterFinish(leftSize, rightSize) {
      const record = this.records[this.phaseIndex][this.trialIndex];
      record.leftValue = leftSize;
      record.rightValue = rightSize;
      this.currentComponentName = ScatterSurvey.name;
    },
    surveyFinish(record) {
      this.records[this.phaseIndex][this.trialIndex] = record;
      this.advance(ScatterTrial);
    },
    advance(nextTrialComponent) {
      postResults(this.uid, [this.records[this.phaseIndex][this.trialIndex]]);
      if (this.trialIndex + 1 == phases[this.phaseIndex].numberOfTrials) {
        this.trialIndex = 0;
        this.phaseIndex += 1;
        if (this.isDone()) {
          let postedResults = [];
          for (let i = 0; i < this.records.length; i++) {
            postedResults.push(...this.records[i]);
          }
          postResults(this.uid, postedResults);
        }
        this.currentComponentName = Instructions.name;
      } else {
        this.trialIndex += 1;
        this.currentComponentName = nextTrialComponent.name;
      }
    },
    isDone() {
      return this.phaseIndex == phases.length - 1;
    },
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css";

.display-text {
  direction: ltr;
}

.main-container {
  width: 900px;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}
</style>
