<template>
  <button @click="onClick()" :class="'btn btn-primary' + (isVisible ? '': 'invisible')" :disabled="disabled">
    <div class="display-text" style="color: white" v-html="content"></div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: String,
    isVisible: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    emit: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
  emits: ["btn-click"],
};
</script>

<style></style>
