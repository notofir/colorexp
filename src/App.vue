<template>
  <div class="container">
    <router-view @instruction-finish="scatter" @scatter-finish="survey"></router-view>
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
      trialIndex: 0,
    }
  },
  created() {
    this.$router.replace({ name: "instructions", params: {index: this.trialIndex}} )
  },
  methods: {
    scatter() {
      this.$router.replace({ name: "scatter", params: {index: this.trialIndex, innerCircles: 40}} )
    },
    survey() {
      this.trialIndex += 1;
      this.$router.replace( {name: "instructions", params: {index: this.trialIndex}} )
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
