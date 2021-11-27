<template>
  <div class="container text-center main-container">
    <div
      v-if="!Boolean('IS DEV PLACEHOLDER FOR QUALTRICS')"
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
    // Skipping last goodbye phase.
    let records = new Array(phases.length - 1);
    for (let i = 0; i < records.length; i++) {
      records[i] = new Array(phases[i].numberOfTrials);
      for (let j = 0; j < records[i].length; j++) {
        records[i][j] = new Object();
      }
    }

    return {
      currentComponentName: Instructions.name,
      isExperimental: Boolean("IS EXPERIMENTAL PLACEHOLDER FOR QUALTRICS"),
      uid: "UID PLACEHOLDER FOR QUALTRICS",
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
.display-text {
  direction: ltr;
  font-size: 1.4vw;
}

.main-container {
  width: 70vw;
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
}

.btn-group button {
  background-color: #0d6efd;
  border: 0.1vw solid #0d6efd;
  color: white;
  padding: 0.7vh 1vw;
  cursor: pointer;
  float: left;
}

.btn-group button:last-child {
  border-top-right-radius: 0.2vw;
  border-bottom-right-radius: 0.2vw;
}

.btn-group button:first-child {
  border-right: none;
  border-top-left-radius: 0.2vw;
  border-bottom-left-radius: 0.2vw;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:hover {
  background-color: #0b4cfd;
}

.btn-group button:disabled {
  background-color: rgba(0, 0, 250, 0.4);
  border: 0.1vw solid transparent;
  cursor: not-allowed;
}
</style>
