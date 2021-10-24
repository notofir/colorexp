<template>
<div>
  <div>
    <h1>{{ pages[currentPage].title }}</h1>
    <div class="instruction">{{ pages[currentPage].text }}</div>
  </div>
  <div>
    <Button @btn-click="onClickNext()" text="< הבא" />
    <Button @btn-click="onClickPrev()" :disabled="currentPage == 0" text="הקודם >" />
  </div>
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
  max-width: 95%;
    text-align: center;
    margin: auto;
    direction: rtl;
}
</style>
