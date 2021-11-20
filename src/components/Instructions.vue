<template>
  <div class="container" style="height: 100%">
    <div class="row" style="height: 15%">
      <div class="col mt-auto">
        <p class="h1 instruction display-text">
          {{ pages[currentPage].title }}
        </p>
      </div>
    </div>
    <div class="row pt-5" style="min-height: 50%">
      <div class="col pt-2">
        <p
          v-html="pages[currentPage].text"
          class="instruction display-text instruction-body"
        ></p>
      </div>
    </div>
    <div class="row pt-4">
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
    isExperimental: Boolean,
    isDone: Boolean,
  },
  data() {
    const pages = [];
    const allPages = phases[this.phaseIndex].instructions;
    for (let i = 0; i < allPages.length; i++) {
      if (!this.isExperimental && allPages[i].isExperimental) {
        continue;
      }

      pages.push(allPages[i]);
    }
    return {
      currentPage: 0,
      pages: pages,
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
      console.log("IS DONE PLACEHOLDER FOR QUALTRICS");
    }
  },
};
</script>

<style scoped>
.instruction {
  max-width: 95%;
  text-align: center;
  margin: auto;
  color: black;
}

.instruction-body {
  font-size: 1.1rem;
  text-align: justify;
}
</style>
