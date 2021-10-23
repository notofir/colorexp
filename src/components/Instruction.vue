<template>
  <div>
    <div class="instruction">{{ pages[currentPage] }}</div>
  </div>
  <div>
    <Button @btn-click="onClickNext()" text="הבא" />
    <Button @btn-click="onClickPrev()" text="הקודם" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Instruction",
  props: {
    pages: Array,
  },
  data() {
    return {
      currentPage: 0,
    }
  },
  components: { Button },
  emits: ["next-page", "instruction-finish"],
  methods: {
onClickNext() {
  if (this.currentPage < this.pages.length - 1) {
    this.currentPage += 1;
  } else {
    this.$emit("instruction-finish")
  }
},
onClickPrev() {
  if (this.currentPage > 0) {
    this.currentPage -= 1;
  }
  }
  },
};
</script>

<style scoped>
.instruction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
