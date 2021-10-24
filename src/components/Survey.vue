<template>
  <div>
    <div class="survey">באיזה צד היו יותר עיגולים?</div>
    <div>
      <Button @btn-click="$emit('click-right')" text="ימין" />
      <Button @btn-click="$emit('click-left')" text="שמאל" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Survey",
  props: {
    pages: Array,
  },
  data() {
    return {
      currentPage: 0,
    };
  },
  components: { Button },
  emits: ["click-right", "click-left"],
  methods: {
    onClickRight() {
      if (this.currentPage < this.pages.length - 1) {
        this.currentPage += 1;
      } else {
        this.$emit("instruction-finish");
      }
    },
    onClickLeft() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
  },
};
</script>

<style scoped>
.survey {
  max-width: 95%;
  text-align: center;
  margin: auto;
  direction: rtl;
}
</style>
