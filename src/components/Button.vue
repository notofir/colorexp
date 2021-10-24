<template>
  <button @click="onClick()" class="btn" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
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

<style>
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin: 0px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Open Sans", "Arial", sans-serif;
  cursor: pointer;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn:hover {
  background-color: #ddd;
  border-color: #aaa;
}
.btn:disabled {
  background-color: #eee;
  color: #aaa;
  border-color: #ccc;
  cursor: not-allowed;
}
</style>
