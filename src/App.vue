<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col"></div>
    </div>
    <div class="row align-items-center full-page">
      <div class="col"></div>
      <div class="col-5">
        <component
          @instruction-finish="instructionFinish"
          @scatter-finish="scatterFinish"
          @survey-finish="surveyFinish"
          :is="currentComponent"
          v-bind="currentProps"
        />
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import Instructions from "./components/Instructions.vue";
import Survey from "./components/Survey.vue";
import Scatter from "./components/Scatter.vue";
import phases from "./circletrials";

export default {
  name: "App",
  components: { Instructions, Scatter, Survey },
  data() {
    let records = new Array(phases.length);
    for (let i = 0; i < records.length; i++) {
      records[i] = new Array(phases[i].numberOfTrials);
      for (let j = 0; j < records[i].length; j++) {
        records[i][j] = new Object();
      }
    }

    return {
      currentComponentName: "Instructions",
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
        case "Instructions":
          return { phaseIndex: this.phaseIndex };
        case "Scatter":
          return { phaseIndex: this.phaseIndex, trialIndex: this.trialIndex };
        case "Survey":
          return { phaseIndex: this.phaseIndex, trialIndex: this.trialIndex };
        default:
          return {};
      }
    },
  },
  methods: {
    instructionFinish() {
      this.currentComponentName = "Scatter";
    },
    scatterFinish(leftSize, rightSize) {
      this.records[this.phaseIndex][this.trialIndex].leftSize = leftSize
      this.records[this.phaseIndex][this.trialIndex].rightSize = rightSize
      this.currentComponentName = "Survey";
    },
    surveyFinish(pickedSide, hint) {
      this.records[this.phaseIndex][this.trialIndex].pickedSide = pickedSide;
      this.records[this.phaseIndex][this.trialIndex].didFollowHint = hint.side === pickedSide;
      this.records[this.phaseIndex][this.trialIndex].hintGroupSize = hint.size;
      this.trialIndex += 1;
      if (this.trialIndex == phases[this.phaseIndex].numberOfTrials) {
        this.phaseIndex += 1;
        this.currentComponentName = "Instructions";
      } else {
        this.currentComponentName = "Scatter";
      }
    },
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css";

.display-text {
  direction: rtl;
}

.full-page {
  height: 100vh;
}
</style>
