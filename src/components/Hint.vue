<template>
  <div class="row">
    <div class="col align-items-center justify-content-center">
      <Button
        @btn-click="onClick"
        :content="hintContent"
        :disabled="isClicked"
      />
    </div>
  </div>
</template>

<script>
import getRNG from "../seededrandom";
import Button from "./Button.vue";

export default {
  name: "Hint",
  components: { Button },
  props: {
    phaseIndex: Number,
    trialIndex: Number,
    canBeCenter: Boolean,
  },
  data() {
    const rng = getRNG("hint", this.phaseIndex, this.trialIndex);
    const hintGroupSize = rng.getEntry([5, 107]).toString();
    return {
      rng: rng,
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
      this.$emit("hint-click", {
        side: this.rng.getEntry(["right", "left"]),
        size: this.hintGroupSize,
      });
    },
  },
};
</script>

<style></style>
