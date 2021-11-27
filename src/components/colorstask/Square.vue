<template>
  <div :style="'display: flex; justify-content: ' + alignment + ';'">
    <div class="square" :style="'background-color: ' + color"></div>
  </div>
</template>

<script>
export default {
  name: "Square",
  props: {
    color: String,
    alignment: String,
  },
};
</script>

<style scoped>
.square {
  height: 10vh;
  width: 10vh;
}
</style>
