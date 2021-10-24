<template>
  <div>
    <Hint @hint-click="onHint" :hintSize="5" />
    <div>
      <Button @btn-click="$emit('right-click')" content="ימין" />
      <Button @btn-click="$emit('left-click')" content="שמאל" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Hint from "./Hint.vue";

export default {
  name: "Survey",
  components: { Hint, Button },
  emits: ["right-click", "left-click"],
  methods: {
    onHint() {
    },
  },
};
</script>

<style scoped>
.survey {
  max-width: 95%;
  text-align: center;
  margin: auto;
}
</style>
