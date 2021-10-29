<template>
  <div class="container-fluid text-center">
    <div
      class="
        row
        align-items-center
        justify-content-center
        full-page
      "
    >
      <div class="col"></div>
      <div class="col-6">
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
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import Instructions from "./components/Instructions.vue";
import ScatterSurvey from "./components/scatterexc/ScatterSurvey.vue";
import ScatterTrial from "./components/scatterexc/ScatterTrial.vue";
import ColorsTrial from "./components/colorsexc/ColorsTrial.vue";
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
      postResults; // TODO: remove
      switch (this.currentComponentName) {
        case Instructions.name:
          return { phaseIndex: this.phaseIndex };
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
      this.currentComponentName = phases[this.phaseIndex].excName;
    },
    colorsFinish(
      leftValue,
      rightValue,
      midColorPos,
      didGiveHint,
      hintSide,
      didFollowHint,
      hintGroupSize,
    ) {
      const record = this.records[this.phaseIndex][this.trialIndex];
      record.leftValue = leftValue;
      record.rightValue = rightValue;
      record.value = midColorPos;
      record.didGiveHint = didGiveHint;
      record.hintSide = hintSide;
      record.didFollowHint = didFollowHint;
      record.hintGroupSize = hintGroupSize;
      if (this.trialIndex + 1 == phases[this.phaseIndex].numberOfTrials) {
        this.trialIndex = 0;
        this.phaseIndex += 1;
        this.currentComponentName = Instructions.name;
      } else {
        this.trialIndex += 1;
      }
    },
    scatterFinish(leftSize, rightSize) {
      const record = this.records[this.phaseIndex][this.trialIndex];
      record.leftValue = leftSize;
      record.rightValue = rightSize;
      this.currentComponentName = ScatterSurvey.name;
    },
    surveyFinish(didGiveHint, pickedSide, didFollowHint, hintGroupSize) {
      const record = this.records[this.phaseIndex][this.trialIndex];
      record.value = pickedSide;
      record.didGiveHint = didGiveHint;
      record.didFollowHint = didFollowHint;
      record.hintGroupSize = hintGroupSize;
      if (this.trialIndex + 1 == phases[this.phaseIndex].numberOfTrials) {
        this.trialIndex = 0;
        this.phaseIndex += 1;
        this.currentComponentName = Instructions.name;
      } else {
        this.trialIndex += 1;
        this.currentComponentName = ScatterTrial.name;
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
