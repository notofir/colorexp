<template>
  <div class="container">
    <Instructions :instructions="instructions" />
    <Circle />
  </div>
</template>

<script>
import Instructions from "./components/Instructions.vue";
import Circle from "./components/Circle.vue";

export default {
  name: "App",
  components: { Instructions, Circle },
  data() {
    return {
      instructions: [],
    };
  },
  created() {
    this.instructions = [
      {
        index: 1,
        text: "you need to be instructed",
      },
    ];
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
