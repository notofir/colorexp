<template>
  <div class="container p-0">
    <div class="row">
      <div class="col">
        <Hint
          @hint-click="onHint"
          v-show="trialHint.autoHintClicks.min <= 0 && hintGroup.size != 0"
          :hintGroupSize="hintGroup.size"
          :isDisabled="hintSide != ''"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 id="hint-timer" class="my-5">&nbsp;</h2>
      </div>
    </div>
    <div class="row">
      <div class="col my-auto">
        <DisplayedHint
          v-if="displayedHintSide === 'left'"
          :side="hintSide"
          :size="hintGroup.size"
        />
      </div>
      <div class="col-7">
        <div class="row mb-5">
          <div class="col"></div>
        </div>
        <div class="row mb-5">
          <div class="col p-0 pt-1">
            <Square alignment="s" :color="displayedLeftColor" />
          </div>
          <div class="col p-0">
            <DisplayedHint
              v-if="displayedHintSide === 'correct'"
              :side="hintSide"
              :size="hintGroup.size"
            />
          </div>
          <div class="col p-0 pt-1">
            <Square
              alignment="e"
              :color="displayeRightColor"
              :size="hintGroup.size"
            />
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <Square alignment="x" :color="midColor" />
          </div>
        </div>
        <div class="row mb-4 pt-4">
          <div class="col">
            <ArrowKey
              side="left"
              :isInvisible="isTutorial"
              :initPresses="tutorialPresses"
              :isPressed="pressedKey == 'left'"
              :isDisabled="isArrowKeyDisabled(maxMid)"
            />
          </div>
          <div class="col"></div>
          <div class="col">
            <ArrowKey
              side="right"
              :isInvisible="false"
              :initPresses="tutorialPresses"
              :isPressed="pressedKey == 'right'"
              :isDisabled="isArrowKeyDisabled(minMid)"
            />
          </div>
        </div>
        <div class="row">
          <div class="col my-auto">
            <span
              :id="'tutorial-' + submitID"
              :class="'d-inline-block ' + (isTutorial ? 'invisible' : '')"
              data-bs-trigger="manual"
              data-bs-placement="bottom"
              data-bs-content="Press the submit button when you believe you're done"
            >
              <Button
                @btn-click="onSubmit"
                :content="submitID"
                :disabled="shouldWitholdInput"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="col my-auto">
        <DisplayedHint
          v-if="displayedHintSide === 'right'"
          :side="hintSide"
          :size="hintGroup.size"
        />
      </div>
    </div>
    <!-- Hint ack modal -->
    <div
      id="hint-ack-modal"
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h3>Please confirm that you've seen the displayed hint.</h3>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="this.shouldWitholdInput = false"
              data-bs-dismiss="modal"
            >
              ok <i class="bi bi-check"></i>
            </button>
          </div>
        </div>
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
import createHint from "../../hint";
import Square from "./Square.vue";
import DisplayedHint from "../DisplayedHint.vue";
import Hint from "../Hint.vue";
import Button from "../Button.vue";
import phases from "../../circletrials";
import ArrowKey from "./ArrowKey.vue";
const bootstrap = require("bootstrap");

const maxLight = 70;
const minLight = 20;
const maxLightGap = 15;

function getRandomColor(rng) {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += rng.getElement(letters);
  }

  return color;
}

function getDisplayedHint(
  pickedValueRel,
  pickedValueAbs,
  minAbs,
  maxAbs,
  isDefaultTrue
) {
  if (pickedValueRel == 0.5) {
    return ["correct", true];
  }
  let actualDirection, misdirection;
  if (pickedValueRel > 0.5) {
    misdirection = "left";
    actualDirection = "right";
  } else {
    misdirection = "right";
    actualDirection = "left";
  }
  if (pickedValueAbs <= minAbs || pickedValueAbs >= maxAbs) {
    return [actualDirection, true];
  }
  console.log(isDefaultTrue, actualDirection, misdirection);
  return [isDefaultTrue ? actualDirection : misdirection, isDefaultTrue];
}

export default {
  components: { Button, Hint, DisplayedHint, Square, ArrowKey },
  name: "ColorsTrial",
  props: {
    phaseIndex: Number,
    trialIndex: Number,
  },
  data() {
    const rng = getRNG("colors", this.phaseIndex, this.trialIndex);
    const color = getRandomColor(rng);
    const minGap = 5;
    const currentTrial = phases[this.phaseIndex];
    const isTutorial = currentTrial.isTutorial && this.trialIndex == 0;
    const submitID = "submit";
    let midLightDiff;
    const tutorialPresses = 10;
    // Not allowing to get too close to the ends, nor calculating the middle.
    const maxMid = maxLight - (minGap + rng.getInt(maxLightGap - minGap));
    let minMid = minLight + (minGap + rng.getInt(maxLightGap - minGap));
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
    const trialHint = createHint(
      typeof currentTrial.hint === "object" ? currentTrial.hint : {}
    );
    const hintGroup = rng.getElement(trialHint.groups);
    const displayedLeftColor = calcColor(color, maxLight); // Bright.
    const displayeRightColor = calcColor(color, minLight); // Dark.
    return {
      rng: rng,
      isDisplayedHintTrue: false,
      hintCountDown: trialHint.delay,
      currentTutorialPopover: null,
      isTutorial: isTutorial,
      currentTrial: currentTrial,
      pressedKey: "",
      minMid: minMid,
      maxMid: maxMid,
      hintSide: "",
      hintGroup: hintGroup,
      trialHint: trialHint,
      autoHintCounter:
        trialHint.autoHintClicks.min +
        rng.getInt(
          trialHint.autoHintClicks.max + 1 - trialHint.autoHintClicks.min
        ),
      didGiveHint: false,
      tutorialPresses: tutorialPresses,
      tutorialPressesLeft: tutorialPresses,
      currentTutorialID: "",
      currentTutorialIndex: 0,
      shouldWitholdInput: false,
      currentTutorialElement: null,
      didFollowHint: false,
      keyPresses: 0,
      displayedHintSide: "",
      didDisplayFeedback: !currentTrial.shouldDisplayFeedback,
      color: color,
      submitID: submitID,
      tutorialIDs: ["right", "left", submitID],
      midLight: midLight,
      displayedLeftColor: displayedLeftColor,
      displayeRightColor: displayeRightColor,
      overrideMidColor: null,
      trialStartTime: null,
      leftColor: displayedLeftColor,
      rightColor: displayeRightColor,
    };
  },
  emits: ["colors-finish"],
  methods: {
    getRelativePos() {
      return (this.midLight - minLight) / (maxLight - minLight);
    },
    onHint() {
      if (this.hintCountDown > 0) {
        this.displayedLeftColor = "black";
        this.displayeRightColor = "black";
        this.overrideMidColor = "black";
        this.shouldWitholdInput = true;
        this.hintCountDownTimer();
        return;
      } else if (this.trialHint.delay > 0) {
        this.displayedLeftColor = this.leftColor;
        this.displayeRightColor = this.rightColor;
        this.overrideMidColor = null;
        this.shouldWitholdInput = false;
      }
      [this.hintSide, this.isDisplayedHintTrue] = getDisplayedHint(
        this.getRelativePos(),
        this.midLight,
        this.minLight + maxLightGap,
        this.maxLight - maxLightGap,
        this.rng.getBool(this.hintGroup.certainty)
      );

      this.displayedHintSide = this.hintSide;
      this.didGiveHint = true;
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
      if (!this.didDisplayFeedback) {
        this.showFeedbackModal();
        return;
      }

      this.toggleNextTutorial();
      this.$emit(
        "colors-finish",
        createRecord({
          phaseIndex: this.phaseIndex,
          trialIndex: this.trialIndex,
          isTutorial: this.isTutorial,
          leftValue: 0,
          rightValue: 1,
          pickedValue: this.getRelativePos(),
          didGiveHint: this.didGiveHint,
          displayedHintSide: this.hintSide,
          isDisplayedHintTrue: this.isDisplayedHintTrue,
          didFollowHint: this.didFollowHint,
          hintGroupSize: this.hintGroup.size,
          trialTimeMs:
            new Date() - this.trialStartTime - 1000 * this.trialHint.delay,
          keyPresses: this.keyPresses,
        })
      );
    },
    showHintAckModal() {
      new bootstrap.Modal(document.getElementById("hint-ack-modal")).show();
    },
    showFeedbackModal() {
      this.didDisplayFeedback = true;
      const score = this.getRelativePos().toFixed(2) * 100;
      document.getElementById("score-range").value = score;
      document.getElementById("score-modal-label").innerHTML =
        "Score: " + score.toString() + "%";

      new bootstrap.Modal(document.getElementById("score-modal")).show();
    },
    hintCountDownTimer() {
      if (this.hintCountDown > 0) {
        document.getElementById("hint-timer").innerHTML =
          this.hintCountDown.toString() + "s";
        setTimeout(() => {
          this.hintCountDown -= 1;
          this.hintCountDownTimer();
        }, 1000);
      } else {
        document.getElementById("hint-timer").innerHTML = "&nbsp;";
        this.onHint();
      }
    },
    keyboardListener(e) {
      if (e.repeat) return;
      if (this.shouldWitholdInput) return;
      if (e.key === "ArrowLeft") {
        if (!this.handlePressedKey("left", this.midLight < this.maxMid, +1))
          return;
      } else if (e.key === "ArrowRight") {
        if (!this.handlePressedKey("right", this.midLight > this.minMid, -1))
          return;
      } else return;
      if (this.isTutorial && this.currentTutorialID != this.submitID) {
        this.tutorialPressesLeft -= 1;
        if (this.tutorialPressesLeft == 0) {
          this.toggleNextTutorial();
        } else {
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
      if (this.autoHintCounter == 0) {
        this.shouldWitholdInput = true;
        this.onHint();
        this.showHintAckModal();
      }
    },
    // Returns false if key shouldn't be processed.
    handlePressedKey(side, isEnabled, diff) {
      if (
        this.isTutorial &&
        this.currentTutorialID != this.submitID &&
        this.currentTutorialID != side
      )
        return false;
      if (this.displayedHintSide === side) {
        this.didFollowHint = true;
      }
      if (isEnabled) {
        this.pressedKey = side;
        this.midLight += diff;
        this.keyPresses += 1;
        this.autoHintCounter -= 1;
        return true;
      }
      return false;
    },
    isArrowKeyDisabled(edge) {
      return this.midLight == edge || this.shouldWitholdInput;
    },
  },
  computed: {
    midColor() {
      if (this.overrideMidColor != null) {
        return this.overrideMidColor;
      }
      return calcColor(this.color, this.midLight);
    },
  },
  created() {
    window.addEventListener("keydown", this.keyboardListener);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyboardListener);
  },
  mounted() {
    this.trialStartTime = new Date();
    this.toggleNextTutorial();
  },
};
</script>

<style></style>
