<template>
  <div>
    <div class="instruction">{{ instruction.text }}</div>
  </div>
  <div>
    <Button @btn-click="$" text="הבא" />
    <Button @btn-click="$" text="הקודם" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Instruction",
  props: {
    instruction: Object,
    next: Object,
    prev: Object,
  },
  components: { Button },
};
</script>

<style scoped>
.instruction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
