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
            <DisplayedHint
              v-if="displayedHintSide === 'correct'"
              :hint="hint"
            />
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
            <span
              id="tutorial-left"
              :class="'d-inline-block ' + (this.isTutorial? 'invisible': '')"
              data-bs-trigger="manual"
              data-bs-placement="left"
              :data-bs-content="
                'Press left key on your keyboard ' + this.tutorialPresses.toString() + ' times'
              "
            >
              <i
                :class="
                  'fs-1 bi bi-arrow-left-square' +
                  (pressedKey == 'left' ? '-fill' : '')
                "
              ></i>
            </span>
          </div>
          <div class="col">
            <span
              id="tutorial-choose"
              :class="'d-inline-block ' + (this.isTutorial? 'invisible': '')"
              data-bs-trigger="manual"
              data-bs-placement="bottom"
              data-bs-content="Press the choose button when you believe you're done"
            >
              <Button @btn-click="onChoose" content="בחר" />
            </span>
          </div>
          <div class="col">
            <span
              id="tutorial-right"
              class="d-inline-block"
              data-bs-trigger="manual"
              data-bs-placement="right"
              :data-bs-content="
                'Press right key on your keyboard ' + this.tutorialPresses.toString() + ' times'
              "
            >
              <i
                :class="
                  'fs-1 bi bi-arrow-right-square' +
                  (pressedKey == 'right' ? '-fill' : '')
                "
              ></i>
            </span>
          </div>
        </div>
      </div>
      <div class="col">
        <DisplayedHint v-if="displayedHintSide === 'right'" :hint="hint" />
      </div>
    </div>
  </div>
</template>

<script>
import getRNG from "../../seededrandom";
import calcColor from "../../colors";
import createRecord from "../../record";
import Square from "./Square.vue";
import DisplayedHint from "../DisplayedHint.vue";
import Hint from "../Hint.vue";
import Button from "../Button.vue";
// TODO: solve this.
//import bootstrap from "bootstrap";
const bootstrap = require("bootstrap");

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
    const isTutorial = this.phaseIndex == 0 && this.trialIndex == 0;
    let midLightDiff;
    const tutorialPresses = 10;
    if (isTutorial) {
      midLightDiff = tutorialPresses + rng.getInt(maxLight - minLight - tutorialPresses);
    } else {
      midLightDiff = 1 + rng.getInt(maxLight - minLight - 1); // 1 <= diff <= 39.
    }
    const midLight = minLight + midLightDiff;
    return {
      rng: rng,
      currentTutorialPopover: null,
      isTutorial: isTutorial,
      pressedKey: "",
      hint: { side: "", size: 0 },
      didGiveHint: false,
      tutorialPresses: tutorialPresses,
      tutorialPressesLeft: tutorialPresses,
      currentTutorialID: "",
      currentTutorialIndex: 0,
      currentTutorialElement: null,
      didFollowHint: false,
      displayedHintSide: "",
      color: color,
      tutorialIDs: ["right", "left", "choose"],
      midLight: midLight,
      leftColor: calcColor(color, maxLight), // Bright.
      rightColor: calcColor(color, minLight), // Dark.
    };
  },
  emits: ["colors-finish"],
  methods: {
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
    toggleNextTutorial() {
      if (!this.isTutorial) return;
      this.tutorialPressesLeft = this.tutorialPresses;
      if (this.currentTutorialPopover != null) {
        this.currentTutorialIndex += 1;
        this.currentTutorialPopover.dispose();
        if (this.currentTutorialIndex == this.tutorialIDs.length - 1) {
          for (let i = 0; i < this.currentTutorialIndex; i++) {
            document.querySelector("#tutorial-" + this.tutorialIDs[i]).classList.remove("invisible");
          }
        } else {
          this.currentTutorialElement.classList.add("invisible");
        }
      }
      if (this.currentTutorialIndex >= this.tutorialIDs.length) return;
      this.currentTutorialID = this.tutorialIDs[this.currentTutorialIndex];
      this.currentTutorialElement = document.querySelector("#tutorial-" + this.currentTutorialID);
      this.currentTutorialElement.classList.remove("invisible");
      this.currentTutorialPopover = new bootstrap.Popover(this.currentTutorialElement);
      this.currentTutorialPopover.show();
    },
    onChoose() {
      this.toggleNextTutorial();
      this.$emit(
        "colors-finish",
        createRecord({
          isTutorial: this.isTutorial,
          leftValue: 0,
          rightValue: 1,
          pickedValue: this.getRelativePos(),
          didGiveHint: this.didGiveHint,
          hintSide: this.hint.side,
          didFollowHint: this.didFollowHint,
          hintGroupSize: this.hint.size,
    }),
      );
    },
  },
  computed: {
    midColor() {
      return calcColor(this.color, this.midLight);
    },
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      if (this.isTutorial) {
        if (e.key === "ArrowLeft") {
          if (this.currentTutorialID === "right") {
            return;
          }
          this.pressedKey = "left";
          if (this.midLight < maxLight) {
            this.midLight += 1;
          }
        } else if (e.key === "ArrowRight") {
          if (this.currentTutorialID === "left") {
            return;
          }
          this.pressedKey = "right";
          if (this.midLight > minLight) {
            this.midLight -= 1;
          }
        } else return;
        if (this.currentTutorialID != "choose") {
          this.tutorialPressesLeft -= 1;
          if (this.tutorialPressesLeft == 0) {
            this.toggleNextTutorial();
          } else {
            //this.currentTutorialPopover.data('bs.popover').options.content = "blabla";
            document.getElementsByClassName("popover-body")[0].innerHTML = "Press " + this.currentTutorialID.substr(0, this.currentTutorialID.indexOf("-")) + " arrow key " + this.tutorialPressesLeft.toString() + " more times";
          }
        }
      } else {
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
        } else return;
      }
      if (this.displayedHintSide === "correct") {
        this.didFollowHint = false;
      }
      this.displayedHintSide = "";
      setTimeout(() => {
        this.pressedKey = "";
      }, 100);
    });
  },
  mounted() {
    this.toggleNextTutorial();
  },
};
</script>

<style></style>
