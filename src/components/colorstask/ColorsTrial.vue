<template>
  <div class="container p-0" style="height: 100%">
    <div class="row" style="height: 20%">
      <div class="col mt-auto">
        <Hint
          @hint-click="onHint"
          v-show="trialHint.autoHintClicks.min <= 0 && hintGroup.size != 0"
          :hintGroupSize="hintGroup.size"
          :isDisabled="hintSide != ''"
        />
      </div>
    </div>
    <div class="row" style="height: 10%">
      <div class="col my-auto">
        <h2 id="hint-timer" class="m-0">&nbsp;</h2>
      </div>
    </div>
    <div class="row" style="height: 40%">
      <div class="col my-auto">
        <DisplayedHint
          v-if="displayedHintSide === 'left'"
          :side="hintSide"
          :size="hintGroup.size"
        />
      </div>
      <div class="col-7 my-auto">
        <div class="container">
          <div class="row mb-5" style="height: 50%">
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
          <div class="row mb-4" style="height: 50%">
            <div class="col">
              <Square alignment="x" :color="midColor" />
            </div>
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
    <div class="row" style="height: 30%">
      <div class="col"></div>
      <div class="col-6">
        <div class="row">
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
              :id="'btn-' + submitID"
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
      <div class="col"></div>
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
import Square from "./Square.vue";
import DisplayedHint from "../DisplayedHint.vue";
import Hint from "../Hint.vue";
import Button from "../Button.vue";
import phases from "../../phases";
import ArrowKey from "./ArrowKey.vue";
const bootstrap = require("bootstrap");

const maxLight = 70;
const minLight = 20;
const maxGapForUser = 15;

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
  if (pickedValueRel < 0.5) {
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
    isConditionA: Boolean,
  },
  data() {
    const rng = getRNG("colors", this.phaseIndex, this.trialIndex);
    const color = getRandomColor(rng);
    const minGap = 5;
    const currentPhase = phases[this.phaseIndex];
    const isTutorial = currentPhase.isTutorial && this.trialIndex == 0;
    const submitID = "submit";
    let midLightDiff;
    const tutorialPresses = 10;
    // Not allowing to get too close to the ends, nor calculating the middle.
    const maxMid = maxLight - (minGap + rng.getInt(maxGapForUser - minGap));
    let minMid = minLight + (minGap + rng.getInt(maxGapForUser - minGap));
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
    const trialHint = currentPhase.hintCreator(this.isConditionA);
    const hintGroup = rng.getElement(trialHint.groups);
    const displayedLeftColor = calcColor(color, maxLight); // Bright.
    const displayeRightColor = calcColor(color, minLight); // Dark.
    return {
      rng: rng,
      isDisplayedHintTrue: false,
      hintCountDown: trialHint.delay,
      currentPopover: null,
      isTutorial: isTutorial,
      currentPhase: currentPhase,
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
      tutorialPressesCounter: tutorialPresses,
      currentTutorialID: "",
      currentTutorialIndex: 0,
      shouldWitholdInput: false,
      currentTutorialElement: null,
      didFollowHint: false,
      keyPresses: 0,
      displayedHintSide: "",
      didDisplayFeedback: !currentPhase.shouldDisplayFeedback,
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
      const score = 1 - (this.midLight - minLight) / (maxLight - minLight);
      const rounded = Math.round(score * 100);
      return Number("0." + rounded);
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
        minLight + maxGapForUser,
        maxLight - maxGapForUser,
        this.rng.getBool(this.hintGroup.certainty)
      );

      this.displayedHintSide = this.hintSide;
      this.didGiveHint = true;
    },
    toggleAlertnessTester() {
      if (this.currentPhase.alertnessTestIndex <= 0) return;
      if (this.currentPhase.alertnessTestIndex != this.trialIndex) return;
      if (this.currentPopover == null) {
        this.currentPopover = new bootstrap.Popover(
          document.querySelector("#btn-" + this.submitID)
        );
        this.currentPopover.show();
        document.getElementsByClassName("popover-body")[0].innerHTML =
          "ALERTNESS TEST: Choose the darkest color";
      }
    },
    toggleTutorial() {
      if (!this.isTutorial) return;
      this.tutorialPressesCounter = this.tutorialPresses;
      if (this.currentPopover != null) {
        this.currentTutorialIndex += 1;
        this.currentPopover.dispose();
        if (this.currentTutorialIndex == this.tutorialIDs.length - 1) {
          for (let i = 0; i < this.currentTutorialIndex; i++) {
            document
              .querySelector("#btn-" + this.tutorialIDs[i])
              .classList.remove("invisible");
          }
        } else {
          this.currentTutorialElement.classList.add("invisible");
        }
      }
      if (this.currentTutorialIndex >= this.tutorialIDs.length) return;
      this.currentTutorialID = this.tutorialIDs[this.currentTutorialIndex];
      this.currentTutorialElement = document.querySelector(
        "#btn-" + this.currentTutorialID
      );
      this.currentTutorialElement.classList.remove("invisible");
      this.currentPopover = new bootstrap.Popover(this.currentTutorialElement);
      this.currentPopover.show();
    },
    onSubmit() {
      if (!this.didDisplayFeedback) {
        this.showFeedbackModal();
        return;
      }
      this.$emit(
        "colors-finish",
        createRecord({
          phaseIndex: this.phaseIndex,
          trialIndex: this.trialIndex,
          isTutorial: this.isTutorial,
          isPractice: this.currentPhase.isPractice,
          isAlertTest: this.currentPhase.alertnessTestIndex == this.trialIndex,
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
      let score = (this.getRelativePos() * 100).toString();
      // Sometimes, it's still printed as 59.9999999...
      if (score.indexOf(".") > 0) {
        score = score.substr(0, score.indexOf("."));
      }
      document.getElementById("score-range").value = score;
      document.getElementById("score-modal-label").innerHTML =
        "Score: " + score + "%";

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
        this.tutorialPressesCounter -= 1;
        if (this.tutorialPressesCounter == 0) {
          this.toggleTutorial();
        } else {
          document.getElementsByClassName("popover-body")[0].innerHTML =
            "Press the " +
            this.currentTutorialID.substr(
              0,
              this.currentTutorialID.indexOf("-")
            ) +
            " arrow key " +
            this.tutorialPressesCounter.toString() +
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
    if (this.currentPopover != null) {
      this.currentPopover.dispose();
    }
  },
  mounted() {
    this.trialStartTime = new Date();
    this.toggleTutorial();
    this.toggleAlertnessTester();
  },
};
</script>

<style></style>
