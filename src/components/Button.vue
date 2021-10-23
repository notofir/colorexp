<template>
  <button @click="onClick()" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
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
