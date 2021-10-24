<template>
  <div class="container">
    <component
      @instruction-finish="scatter"
      @scatter-finish="survey"
      :is="currentComponent"
      v-bind="currentProps"
    />
  </div>
</template>

<script>
import Instructions from "./components/Instructions.vue";
import Survey from "./components/Survey.vue";
import Scatter from "./components/Scatter.vue";
//import "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"

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
    scatter() {
      this.currentComponentName = "Scatter";
    },
    survey() {
      this.trialIndex += 1;
      this.currentComponentName = "Survey";
    },
  },
};
</script>

<style>
/* @import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"; */
/* @import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"; */
.display-text {
  direction: rtl;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
