<template>
  <div style="height: 100%">
    <div style="height: 15%">
      <p class="instruction-head instruction large-text">
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
      <div class="center btn-group">
        <div v-if="!isDone">
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
        <div v-else>
          <Button @btn-click="onClickNext()" content="next >" />
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
      if (this.isDone) {
        this.onFinish();
        return;
      }
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
    onFinish() {
      console.log("IS DONE PLACEHOLDER FOR QUALTRICS");
    },
    keyboardListener(e) {
      if (e.repeat) return;
      switch (e.key) {
        case "ArrowLeft":
          if (this.currentPage == 0) {
            return;
          }
          this.onClickPrev();
          break;
        case "ArrowRight":
          this.onClickNext();
          break;
        default:
          break;
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.keyboardListener);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyboardListener);
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
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
