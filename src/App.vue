<template>
  <div class="container">
    <router-view @instruction-finish="scatter" @scatter-finish="survey"></router-view>
    <!-- <Instructions :instructions="instructions" />
    <Scatter @show-off="survey" /> -->
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
      instructionsIndex: 0,
      scatterIndex: 0,
    }
  },
  created() {
    this.$router.push({ name: "instructions", params: {index: this.instructionsIndex}} )
  },
  methods: {
    scatter() {
      this.$router.push({ "name": "scatter", params: {index: this.scatterIndex, innerCircles: 40}} )
    },
    survey() {
      this.instructionsIndex += 1;
      this.$router.push( {name: "instructions", params: {index: this.instructionsIndex}} )
    },
  }
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
