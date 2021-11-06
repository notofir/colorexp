<template>
  <div class="container" style="height: 100%">
    <div class="row" style="height: 10%">
      <div class="col mt-auto">
        <p class="h1 instruction display-text">
          {{ pages[currentPage].title }}
        </p>
      </div>
    </div>
    <div class="row" style="height: 80%">
      <div class="col pt-2">
        <p class="instruction display-text">
          {{ pages[currentPage].text }}
        </p>
      </div>
    </div>
    <div class="row" style="height: 10%">
      <div class="col">
        <div v-if="!isDone" class="btn-group" role="group">
          <Button
            @btn-click="onClickPrev()"
            :disabled="currentPage == 0"
            content="< prev"
          />
          <Button
            @btn-click="onClickNext()"
            :content="currentPage == this.pages.length - 1 ? 'start' : 'next >'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import phases from "../phases";

export default {
  name: "Instructions",
  props: {
    phaseIndex: Number,
    isDone: Boolean,
  },
  data() {
    return {
      currentPage: 0,
      pages: phases[this.phaseIndex].instructions,
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
  mounted() {
    if (this.isDone) {
      const pl = "IS DONE PLACEHOLDER FOR QUALTRICS";
      pl; // Fixes unused lint error.
    }
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
