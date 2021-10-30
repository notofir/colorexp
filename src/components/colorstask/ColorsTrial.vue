<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex align-items-center">
        <DisplayedHint v-if="displayedHintSide === 'left'" :hint="hint" />
      </div>
      <div class="col-6">
        <div class="row mb-5">
          <div class="col">
            <Hint
              @hint-click="onHint"
              v-show="isHintAvailable"
              :phaseIndex="phaseIndex"
              :trialIndex="trialIndex"
            />
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <Square alignment="s" :color="leftColor" />
          </div>
          <div class="col">
            <DisplayedHint
              v-if="displayedHintSide === 'correct'"
              :hint="hint"
            />
          </div>
          <div class="col">
            <Square alignment="e" :color="rightColor" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <Square alignment="x" :color="midColor" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="text-start">
              <span
                id="tutorial-left"
                :class="
                  'd-inline-block ' + (this.isTutorial ? 'invisible' : '')
                "
                data-bs-trigger="manual"
                data-bs-placement="left"
                :data-bs-content="
                  'Press left key on your keyboard ' +
                  this.tutorialPresses.toString() +
                  ' times'
                "
              >
                <i
                  :class="
                    'fs-1 bi bi-arrow-left-square' +
                    (pressedKey == 'left' ? '-fill' : '')
                  "
                  :style="this.midLight == this.maxMid ? 'color: grey' : ''"
                ></i>
              </span>
            </div>
          </div>
          <div class="col"></div>
          <div class="col">
            <div class="text-end">
              <span
                id="tutorial-right"
                class="d-inline-block"
                data-bs-trigger="manual"
                data-bs-placement="right"
                :data-bs-content="
                  'Press right key on your keyboard ' +
                  this.tutorialPresses.toString() +
                  ' times'
                "
              >
                <i
                  :class="
                    'fs-1 bi bi-arrow-right-square' +
                    (pressedKey == 'right' ? '-fill' : '')
                  "
                  :style="this.midLight == this.minMid ? 'color: grey' : ''"
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col my-auto">
            <span
              id="tutorial-choose"
              :class="'d-inline-block ' + (this.isTutorial ? 'invisible' : '')"
              data-bs-trigger="manual"
              data-bs-placement="bottom"
              data-bs-content="Press the choose button when you believe you're done"
            >
              <Button @btn-click="onSubmit" content="submit" />
            </span>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center">
        <DisplayedHint v-if="displayedHintSide === 'right'" :hint="hint" />
      </div>
    </div>
    <!-- Score modal -->
    <div
      id="score-modal"
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="score-modal-label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="score-modal-label"></h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row align-items-end">
                <div class="col p-0">
                  <p class="text-start mb-0">0</p>
                </div>
                <div class="col p-0">
                  <p class="text-center mb-0">50</p>
                </div>
                <div class="col p-0">
                  <p class="text-end mb-0">100</p>
                </div>
              </div>
              <div class="row">
                <input
                  id="score-range"
                  type="range"
                  class="form-range"
                  min="0"
                  max="100"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="onSubmit"
              data-bs-dismiss="modal"
            >
              ok <i class="bi bi-check"></i>
            </button>
          </div>
        </div>
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

const maxLight = 70;
const minLight = 20;

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
    isHintAvailable: Boolean,
    shouldDisplayModal: Boolean,
  },
  data() {
    const rng = getRNG("colors", this.phaseIndex, this.trialIndex);
    const color = getRandomColor(rng);
    const minGap = 5;
    const maxGap = 15;
    const isTutorial = this.phaseIndex == 0 && this.trialIndex == 0;
    let midLightDiff;
    const tutorialPresses = 10;
    // Not allowing to get too close to the ends, nor calculating the middle.
    const maxMid = maxLight - (minGap + rng.getInt(maxGap - minGap));
    let minMid = minLight + (minGap + rng.getInt(maxGap - minGap));
    // We need to enforce absolute middle.
    if ((maxMid - minMid) % 2 != 0) {
      minMid -= 1;
    }
    if (isTutorial) {
      midLightDiff =
        tutorialPresses + rng.getInt(maxMid - minMid - tutorialPresses);
    } else {
      midLightDiff = rng.getInt(maxMid - minMid);
    }
    const midLight = minMid + midLightDiff;
    return {
      rng: rng,
      currentTutorialPopover: null,
      isTutorial: isTutorial,
      pressedKey: "",
      minMid: minMid,
      maxMid: maxMid,
      hint: { side: "", size: 0 },
      didGiveHint: false,
      tutorialPresses: tutorialPresses,
      tutorialPressesLeft: tutorialPresses,
      currentTutorialID: "",
      currentTutorialIndex: 0,
      currentTutorialElement: null,
      didFollowHint: false,
      displayedHintSide: "",
      didDisplayModal: !this.shouldDisplayModal,
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
            document
              .querySelector("#tutorial-" + this.tutorialIDs[i])
              .classList.remove("invisible");
          }
        } else {
          this.currentTutorialElement.classList.add("invisible");
        }
      }
      if (this.currentTutorialIndex >= this.tutorialIDs.length) return;
      this.currentTutorialID = this.tutorialIDs[this.currentTutorialIndex];
      this.currentTutorialElement = document.querySelector(
        "#tutorial-" + this.currentTutorialID
      );
      this.currentTutorialElement.classList.remove("invisible");
      this.currentTutorialPopover = new bootstrap.Popover(
        this.currentTutorialElement
      );
      this.currentTutorialPopover.show();
    },
    onSubmit() {
      if (!this.didDisplayModal) {
        this.showModal();
        return;
      }

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
        })
      );
    },
    showModal() {
      this.didDisplayModal = true;
      const score = this.getRelativePos().toFixed(2) * 100;
      document.getElementById("score-range").value = score;
      document.getElementById("score-modal-label").innerHTML =
        "Score: " + score.toString() + "%";

      const scoreModal = new bootstrap.Modal(
        document.getElementById("score-modal")
      );
      scoreModal.show();
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
          if (this.midLight < this.maxMid) {
            this.pressedKey = "left";
            this.midLight += 1;
          }
        } else if (e.key === "ArrowRight") {
          if (this.currentTutorialID === "left") {
            return;
          }
          if (this.midLight > this.minMid) {
            this.pressedKey = "right";
            this.midLight -= 1;
          }
        } else return;
        if (this.currentTutorialID != "choose") {
          this.tutorialPressesLeft -= 1;
          if (this.tutorialPressesLeft == 0) {
            this.toggleNextTutorial();
          } else {
            //this.currentTutorialPopover.data('bs.popover').options.content = "blabla";
            document.getElementsByClassName("popover-body")[0].innerHTML =
              "Press " +
              this.currentTutorialID.substr(
                0,
                this.currentTutorialID.indexOf("-")
              ) +
              " arrow key " +
              this.tutorialPressesLeft.toString() +
              " more times";
          }
        }
      } else {
        if (e.key === "ArrowLeft") {
          if (this.displayedHintSide === "left") {
            this.didFollowHint = true;
          }
          if (this.midLight < this.maxMid) {
            this.pressedKey = "left";
            this.midLight += 1;
          }
        } else if (e.key === "ArrowRight") {
          if (this.displayedHintSide === "right") {
            this.didFollowHint = true;
          }
          if (this.midLight > this.minMid) {
            this.pressedKey = "right";
            this.midLight -= 1;
          }
        } else return;
      }
      if (this.displayedHintSide === "correct") {
        this.didFollowHint = false;
      }
      this.displayedHintSide = "";
      console.log(
        this.midLight,
        this.minMid,
        this.maxMid,
        this.getRelativePos()
      );
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
