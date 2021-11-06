<template>
  <!-- align middle vertically -->
  <button @click="onClick()" class="btn btn-primary" :disabled="disabled">
    <div class="display-text" style="color:white" v-html="content"></div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: String,
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
