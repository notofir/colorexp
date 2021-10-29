<template>
  <div class="container-fluid">
      <div class="row mb-4">
        <div class="col">
          <h1 class="h1 mb-2 instruction display-text">
            {{ pages[currentPage].title }}
          </h1>
          <p class="instruction display-text">
            {{ pages[currentPage].text }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div v-if="isDone" class="btn-group" role="group">
            <Button
              @btn-click="onClickNext()"
              :content="currentPage == this.pages.length - 1 ? 'התחל' : 'הבא >'"
            />
            <Button
              @btn-click="onClickPrev()"
              :disabled="currentPage == 0"
              content="< הקודם"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Button from "./Button.vue";
import phases from "../circletrials";

export default {
  name: "Instructions",
  props: {
    phaseIndex: Number,
  },
  data() {
    return {
      currentPage: 0,
      pages: phases[this.phaseIndex].instructions,
      isDone: this.phaseIndex < phases.length - 1,
    };
  },
  components: { Button },
  emits: ["instructions-finish"],
  methods: {
    onClickNext() {
      if (this.currentPage < this.pages.length - 1) {
        this.currentPage += 1;
      } else {
        this.$emit("instructions-finish");
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
