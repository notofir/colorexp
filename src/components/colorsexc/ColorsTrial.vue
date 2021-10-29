<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <DisplayedHint v-if="displayedHintSide === 'left'" :hint="hint" />
      </div>
      <div class="col-8">
        <div class="row mb-5">
          <div class="col">
            <Hint
              @hint-click="onHint"
              :phaseIndex="phaseIndex"
              :trialIndex="trialIndex"
            />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <Square :color="leftColor" />
          </div>
          <div class="col">
            <DisplayedHint v-if="displayedHintSide === 'correct'" :hint="hint" />
          </div>
          <div class="col">
            <Square :color="rightColor" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <Square :color="midColor" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
              <i :class="'fs-1 bi bi-arrow-left-square' + (pressedKey == 'left'? '-fill': '')"></i>
            </span>
          </div>
          <div class="col">
            <Button @btn-click="onChoose" content="בחר" />
          </div>
          <div class="col">
            <i :class="'fs-1 bi bi-arrow-right-square' + (pressedKey == 'right'? '-fill': '')"></i>
          </div>
        </div>
      </div>
      <div class="col">
        <DisplayedHint v-if="displayedHintSide === 'right'" :hint="hint" />
      </div>
    </div>
    <div id="tooltip" role="tooltip">I'm a tooltip</div>
  </div>
</template>

<script>
import getRNG from "../../seededrandom";
import calcColor from "../../colors";
import Square from "./Square.vue";
import DisplayedHint from "../DisplayedHint.vue";
import Hint from "../Hint.vue";
import Button from "../Button.vue";

// TODO: this isn't 50 gap....
const maxLight = 70;
const minLight = 30;

function getRandomColor(rng) {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += rng.getEntry(letters);
  }

  return color;
}

export default {
  components: { Button, Hint, DisplayedHint, Square },
  name: "ColorsTrial",
  props: {
    phaseIndex: Number,
    trialIndex: Number,
  },
  data() {
    const rng = getRNG("colors", this.phaseIndex, this.trialIndex);
    const color = getRandomColor(rng);
    const midLightDiff = 1 + rng.getInt(maxLight - minLight - 1); // 1 <= diff <= 39.
    const midLight = minLight + midLightDiff;
    return {
      rng: rng,
      pressedKey: "",
      hint: { side: "", size: 0 },
      didGiveHint: false,
      didFollowHint: false,
      displayedHintSide: "",
      color: color,
      midLight: midLight,
      leftColor: calcColor(color, maxLight), // Bright.
      rightColor: calcColor(color, minLight), // Dark.
    };
  },
  emits: ["colors-finish"],
  methods: {
    // Gets a random color in hex
    getRelativePos() {
      return (this.midLight - minLight) / (maxLight - minLight);
    },
    onHint(hint) {
      this.didGiveHint = true;
      if (this.getRelativePos() == 0.5) {
        this.hint.side = "correct";
      } else {
        this.hint = hint;
      }
      this.displayedHintSide = this.hint.side;
    },
    onChoose() {
      this.$emit(
        "colors-finish",
        maxLight,
        minLight,
        this.getRelativePos(),
        this.didGiveHint,
        this.hint.side,
        this.didFollowHint,
        this.hint.size,
      );
    },
  },
  computed: {
    midColor() {
      return calcColor(this.color, this.midLight)
    },
  },
  created() {
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.repeat) return;
        if (e.key === "ArrowLeft") {
          if (this.displayedHintSide === "left") {
            this.didFollowHint = true;
          }
          this.pressedKey = "left";
          if (this.midLight < maxLight) {
            this.midLight += 1;
          }
        } else if (e.key === "ArrowRight") {
          if (this.displayedHintSide === "right") {
            this.didFollowHint = true;
          }
          this.pressedKey = "right";
          if (this.midLight > minLight) {
            this.midLight -= 1;
          }
        }
        if (this.pressedKey != "") {
          if (this.displayedHintSide === "correct") {
            this.didFollowHint = false;
          }
          this.displayedHintSide = "";
          setTimeout(() => {
            this.pressedKey = "";
          }, 100);
        }
      },
    );
  },
};
</script>

<style>
 #tooltip {
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
  }
  </style>
