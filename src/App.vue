<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col"></div>
    </div>
    <div class="row align-items-center">
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

export default {
  name: "App",
  components: { Instructions, Scatter, Survey },
  data() {
    return {
      currentComponentName: "Instructions",
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
          return { index: this.trialIndex };
        case "Scatter":
          return { index: this.trialIndex, innerCircles: 40 };
        case "Survey":
          return {};
        default:
          return {}
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
      this.currentComponentName = "Scatter";
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

#app {
  margin-top: 100px;
}

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
.top-buffer { margin-top:20px; }
</style>
