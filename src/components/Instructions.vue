<template>
  <div class="instructions-container">
    <Instruction @instruction-finish="$emit('instruction-finish')" :pages="instructions[index]" />
  </div>
</template>

<script>
import Instruction from "./Instruction.vue";

export default {
  name: "Instructions",
  props: {
    index: Number,
  },
  data() {
    return {
      instructions: [
        [
          {
            title: "First Page",
            text: "page 1 inst.",
          },
          {
            title: "Second page",
            text: "page 2 inst.",
          }
        ],
      ],
    };
  },
  components: { Instruction },
  emits: ["instruction-finish"],
};
</script>

<style scoped></style>
