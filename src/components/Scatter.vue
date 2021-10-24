<template>
  <div>
    <svg v-show="elementVisible" class="hideElement" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill="black" />
      <circle cx="75" cy="25" r="25" fill="black" />
    </svg>
  </div>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  name: "Scatter",
  props: {
    innerCircles: Number,
  },
  data() {
    return {
      elementVisible: true,
      stageSize: {
        width: width,
        height: height,
      },
      leftSize: 50,
      rightSize: 50,
    };
  },
  created() {
    setTimeout(
      () => {
        this.elementVisible = false
        this.$emit("scatter-finish", this.leftSize, this.rightSize)
      },
      700,
    )
  },
  emits: ["scatter-finish"],
};
</script>

<style scoped></style>
