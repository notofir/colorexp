<template>
  <div :class="'m' + alignment + '-auto square'" :style="'background-color: ' + color"></div>
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
  height: 55px;
  width: 55px;
}
</style>
