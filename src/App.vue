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
    return {
      currentComponentName: "Instructions",
      phaseIndex: 0,
      trialIndex: 0,
    };
  },
  computed: {
    currentComponent() {
      return this.currentComponentName;
    },
    currentProps() {
      switch (this.currentComponentName) {
        case "Instructions":
          return { index: this.phaseIndex };
        case "Scatter":
          return { seed: this.trialIndex };
        case "Survey":
          return {};
        default:
          return {};
      }
    },
  },
  methods: {
    instructionFinish() {
      this.currentComponentName = "Scatter";
    },
    scatterFinish() {
      this.trialIndex += 1;
      this.currentComponentName = "Survey";
    },
    surveyFinish() {
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

/*
.top-buffer {
  margin-top: 20px;
}
*/

.full-page {
  height: 100vh;
}
</style>
