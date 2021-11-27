<template>
  <div class="btn-group">
    <Button
      @btn-click="onClick"
      :content="hintContent"
      :disabled="isClicked || isDisabled"
    />
  </div>
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
          <p class="display-text" style="margin: 0 0 0 0;">
              Press for hint
              <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vh" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
              </svg>
          </p>
          <p class="display-text" style="margin: 0 0 0 0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
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
