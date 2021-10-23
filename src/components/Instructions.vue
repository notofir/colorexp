<template>
  <div :key="instruction.index" v-for="instruction in instructions">
    <Instruction :instruction="instruction" />
  </div>
</template>

<script>
import Instruction from "./Instruction.vue";

export default {
  name: "Instructions",
  props: {
    instructions: Array,
  },
  components: { Instruction },
};
</script>

<style scoped></style>
