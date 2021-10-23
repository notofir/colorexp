<template>
  <div>
    <Instruction @instruction-finish="$emit('instruction-finish')" :pages="this.instructions[$route.params.index].pages" />
  </div>
</template>

<script>
import Instruction from "./Instruction.vue";

export default {
  name: "Instructions",
  data() {
    return {
      instructions: [
        {
          pages: [
            "page 1 inst.",
            "page 2 inst.",
          ],
        },
      ],
    };
  },
  components: { Instruction },
  emits: ["instruction-finish"],
};
</script>

<style scoped></style>
