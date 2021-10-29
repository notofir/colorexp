<template>
  <div class="mx-auto square" :style="'background-color: ' + color"></div>
</template>

<script>
export default {
  name: "Square",
  props: {
    color: String,
  },
};
</script>

<style scoped>
.square {
  height: 50px;
  width: 50px;
}
</style>
