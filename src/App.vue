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
import Scatter from "./components/Scatter.vue";

export default {
  name: "App",
  components: { Instructions, Scatter },
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
        default:
          return { index: this.trialIndex, innerCircles: 40 };
      }
    },
  },
  methods: {
    scatter() {
      this.currentComponentName = "Scatter";
    },
    survey() {
      this.trialIndex += 1;
      this.currentComponentName = "Instructions";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
