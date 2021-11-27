<template>
  <div style="height: 100%">
    <div style="height: 15%">
      <p class="instruction-head instruction display-text">
        {{ pages[currentPage].title }}
      </p>
    </div>
    <div style="min-height: 70%">
      <p
        v-html="pages[currentPage].text"
        class="body instruction display-text instruction-body"
      ></p>
    </div>
    <div>
      <div class="center">
        <div v-if="!isDone" class="btn-group">
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
        <Button v-else @btn-click="onFinishTask()" content="next >" />
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
    onFinishTask() {
      console.log("IS DONE PLACEHOLDER FOR QUALTRICS");
    },
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
  text-align: justify;
}

.instruction-head {
  padding-top: 4vh;
  font-size: 2vw;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
