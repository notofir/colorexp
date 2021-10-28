<template>
  <div>
    <Button @btn-click="onClick" :content="hintContent" :disabled="isClicked" />
  </div>
</template>

<script>
import getRNG from '../seededrandom';
import Button from "./Button.vue";

export default {
  name: "Hint",
  components: { Button },
  props: {
    phaseIndex: Number,
    trialIndex: Number,
  },
  data() {
    let rng = getRNG("hint", this.phaseIndex, this.trialIndex);
let hintGroupSize = rng.getEntry([5, 107]).toString();
    return {
      isClicked: false,
      hintGroupSize: hintGroupSize,
      hintContent:
        `
          <h5>
              לחצו לקבלת רמז <i class='bi bi-lightbulb-fill'></i>
            </h5>
          <h5>
            <i class='h4 bi bi-people-fill'></i>
            <br />
          ` +
        hintGroupSize +
        `</h5>`,
    };
  },
  emits: ["hint-click"],
  methods: {
    onClick() {
      this.isClicked = true;
      let side;
      if (Math.random() > 0.5) {
        side = "right";
      } else {
        side = "left";
      }
      this.$emit("hint-click", { side: side, size: this.hintGroupSize });
    },
  },
};
</script>

<style></style>
