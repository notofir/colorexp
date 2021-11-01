<template>
  <div class="container-fluid text-center app-width">
    <div class="row align-items-center justify-content-center full-page">
      <div class="col p-0">
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
import phases from "./circletrials";
import postResults from "./qualtrics";

export default {
  name: "App",
  components: { Instructions, ScatterTrial, ColorsTrial, ScatterSurvey },
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
          return { phaseIndex: this.phaseIndex, isDone: this.isDone() };
        case ColorsTrial.name:
          return { phaseIndex: this.phaseIndex, trialIndex: this.trialIndex };
        case ScatterTrial.name:
          return { phaseIndex: this.phaseIndex, trialIndex: this.trialIndex };
        case ScatterSurvey.name:
          return { phaseIndex: this.phaseIndex, trialIndex: this.trialIndex };
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
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://us-central1-ofirarias-com.cloudfunctions.net/colortask",
        true
      );
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(
        JSON.stringify({
          phaseIndex: this.phaseIndex,
          trialIndex: this.trialIndex,
          record: this.records[this.phaseIndex][this.trialIndex],
        })
      );
      if (this.trialIndex + 1 == phases[this.phaseIndex].numberOfTrials) {
        this.trialIndex = 0;
        this.phaseIndex += 1;
        if (this.isDone()) {
          postResults(this.records);
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

.full-page {
  height: 100vh;
}

.app-width {
  width: 700px;
}
</style>
