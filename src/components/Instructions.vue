<template>
  <div class="instructions-container">
    <Instruction @instruction-finish="$emit('instruction-finish')" :pages="page" />
  </div>
</template>

<script>
import Instruction from "./Instruction.vue";
import trials from "../circletrials"

export default {
  name: "Instructions",
  props: {
    index: Number,
  },
  data() {
    return {
      page: trials[this.index],
    }
  },
  components: { Instruction },
  emits: ["instruction-finish"],
};
</script>

<style scoped></style>
