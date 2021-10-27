<template>
  <div>
    <div>
      <h1 class="instruction display-text">{{ pages[currentPage].title }}</h1>
      <div class="instruction display-text">{{ pages[currentPage].text }}</div>
    </div>
    <div v-if="isDone" class="btn-group" role="group">
      <Button @btn-click="onClickNext()" :content="currentPage == this.pages.length - 1? 'התחל': 'הבא >'" />
      <Button
        @btn-click="onClickPrev()"
        :disabled="currentPage == 0"
        content="< הקודם"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import phases from "../circletrials"

export default {
  name: "Instruction",
  props: {
    index: Number,
  },
  data() {
    return {
      currentPage: 0,
      pages: phases[this.index].instructions,
      isDone: this.index < phases.length - 1,
    };
  },
  components: { Button },
  emits: ["instruction-finish"],
  methods: {
    onClickNext() {
      if (this.currentPage < this.pages.length - 1) {
        this.currentPage += 1;
      } else {
        this.$emit("instruction-finish");
      }
    },
    onClickPrev() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
  },
};
</script>

<style scoped>
.instruction {
  max-width: 95%;
  text-align: center;
  margin: auto;
}
</style>
