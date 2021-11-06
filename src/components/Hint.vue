<template>
  <Button
    @btn-click="onClick"
    :content="hintContent"
    :disabled="isClicked || isDisabled"
  />
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Hint",
  components: { Button },
  props: {
    hintGroupSize: Number,
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClicked: false,
      hintContent: `
          <p class="h5">
              Press for hint <i class='bi bi-lightbulb-fill'></i>
          </p>
          <p class="h5 m-0">
            <i class='h4 bi bi-people-fill'></i>
            <br />
            ${this.hintGroupSize}
        </p>`,
    };
  },
  emits: ["hint-click"],
  methods: {
    onClick() {
      this.isClicked = true;
      this.$emit("hint-click");
    },
  },
};
</script>

<style></style>
