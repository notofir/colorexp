<template>
  <div style="height: 100%">
    <div
      class="row"
      style="height: 20%; position: relative; justify-content: center"
    >
      <div class="col mt-auto" style="position: absolute; bottom: 0">
        <Hint
          @hint-click="onHint"
          v-if="
            !trialHint.isHintEnforced && hintGroup.size != 0 && hintSide === ''
          "
          :hintGroupSize="hintGroup.size"
        />
      </div>
    </div>
    <div class="row" style="height: 6%; justify-content: center">
      <div id="hint-timer" class="large-text">&nbsp;</div>
    </div>
    <div class="row" style="height: 38%">
      <div class="col-left" style="position: relative">
        <div style="height: 25%"></div>
        <DisplayedHint
          v-if="displayedHintSide === 'left'"
          :side="hintSide"
          :size="hintGroup.size"
        />
      </div>
      <div class="col-center">
        <div style="height: 20%"></div>
        <div class="row" style="height: 40%">
          <div style="width: 33.3%">
            <Square alignment="right" :color="displayedLeftColor" />
          </div>
          <div style="width: 33.3%; text-align: center">
            <DisplayedHint
              v-if="displayedHintSide === 'correct'"
              :side="hintSide"
              :size="hintGroup.size"
            />
          </div>
          <div style="width: 33.3%">
            <Square
              alignment="left"
              :color="displayeRightColor"
              :size="hintGroup.size"
            />
          </div>
        </div>
        <div style="height: 40%">
          <div style="width: 100%">
            <Square alignment="center" :color="midColor" />
          </div>
        </div>
      </div>
      <div class="col-right" style="position: relative">
        <div style="height: 25%"></div>
        <DisplayedHint
          v-if="displayedHintSide === 'right'"
          :side="hintSide"
          :size="hintGroup.size"
        />
      </div>
    </div>
    <div class="row" style="height: 36%">
      <div class="col-left"></div>
      <div class="col-center">
        <div class="row" style="height: 30%">
          <div class="col" style="width: 30%">
            <div style="display: flex; justify-content: right">
              <div
                :class="
                  'tooltip2' +
                  (currentTutorialID === leftID ? ' visible-tooltip' : '')
                "
              >
                <ArrowKey
                  side="left"
                  alignment="right"
                  :isVisible="!(currentTutorialID === rightID)"
                  :isPressed="pressedKey == 'left'"
                  :isDisabled="isArrowKeyDisabled(maxUser)"
                />
                <span class="tooltiptext"
                  ><div class="display-text">{{ tutorialContent }}</div></span
                >
              </div>
            </div>
          </div>
          <div class="col" style="width: 40%"></div>
          <div class="col" style="width: 30%">
            <div style="display: flex; justify-content: left">
              <div
                :class="
                  'tooltip2' +
                  (currentTutorialID === rightID ? ' visible-tooltip' : '')
                "
              >
                <ArrowKey
                  side="right"
                  alignment="left"
                  :isVisible="!(currentTutorialID === leftID)"
                  :isPressed="pressedKey == 'right'"
                  :isDisabled="isArrowKeyDisabled(minUser)"
                />
                <span class="tooltiptext"
                  ><div class="display-text">{{ tutorialContent }}</div></span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="justify-content: center">
          <div
            :class="
              'tooltip2' +
              (currentTutorialID === submitID || isAlertnessTestOn
                ? ' visible-tooltip'
                : '')
            "
          >
            <div class="btn-group">
              <Button
                @btn-click="onSubmit"
                :content="enforceHint ? 'hint' : submitID"
                :isVisible="submitVisible"
                :disabled="shouldWitholdInput"
              />
            </div>
            <span v-if="isTutorial" class="tooltiptext"
              ><div class="display-text">
                Now, try to find the mid-point and press submit.
              </div></span
            >
            <span v-else class="tooltiptext"
              ><div class="display-text">
                ALERTNESS TEST<br />for this trial, select the darkest shade
              </div></span
            >
          </div>
        </div>
      </div>
      <div class="col-right"></div>
    </div>
    <Modal
      v-if="modals['modal-hint-ack']"
      id="modal-hint-ack"
      @modal-close="
        modals['modal-hint-ack'] = false;
        shouldWitholdInput = false;
      "
      header="<h3>Hint received</h3>"
    />
    <Modal
      v-if="currentPhase.shouldDisplayFeedback && modals['modal-score']"
      id="modal-score"
      @modal-close="
        modals['modal-score'] = false;
        shouldWitholdInput = false;
        onSubmit();
      "
      :header="
        `<h4 class='modal-title display-text' style='font-size: 2.2vw;'>Score: ` +
        percentageScore +
        `%</h4>`
      "
      :body="
        `
        <div class='display-text' style='display: flex'>
          <div style='flex: 33%'>
            <p style='margin: 1vh 0 0 0'>0</p>
          </div>
          <div style='flex: 33%'>
            <p style='margin: 1vh 0 0 0'>50</p>
          </div>
          <div style=''>
            <p style='margin: 1vh 0 0 0'>100</p>
          </div>
        </div>
        <div style='display: flex'>
          <input id='score-range' style='flex: 100%; margin-bottom: 1vh; margin-top: 1vh; -webkit-appearance: none; height: 0.8vh; background: rgba(220, 220, 220, 0.6); border-radius: 0.5vw;' type='range' class='form-range' min='0' max='100' value='` +
        percentageScore +
        `' disabled />
        </div>
    `
      "
    />
  </div>
</template>

<script>
import getRNG from "../../seededrandom";
import { calcColor, getRandomColor } from "../../colors";
import createRecord from "../../record";
import Square from "./Square.vue";
import DisplayedHint from "../DisplayedHint.vue";
import Hint from "../Hint.vue";
import Button from "../Button.vue";
import Modal from "../Modal.vue";
import phases from "../../phases";
import ArrowKey from "./ArrowKey.vue";

const maxLight = 70;
const minLight = 20;
const maxGapForUser = 15;
const tutorialArrowPresses = 10;
const firstArrow = "right";
const secondArrow = "left";

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
  return [isDefaultTrue ? actualDirection : misdirection, isDefaultTrue];
}

export default {
  name: "ColorsTrial",
  components: { Button, Modal, Hint, DisplayedHint, Square, ArrowKey },
  props: {
    phaseIndex: Number,
    trialIndex: Number,
    isExperimental: Boolean,
    isDev: Boolean,
  },
  data() {
    if (this.isDev) {
      console.log(this.phaseIndex, this.trialIndex);
    }
    const rng = getRNG("colors", this.phaseIndex, this.trialIndex);
    const color = getRandomColor(rng);
    const userRange = 10;
    const minUser =
      (maxLight - minLight) / 2 + minLight - rng.getInt(userRange);
    const currentPhase = phases[this.phaseIndex];
    const isTutorial = currentPhase.isTutorial && this.trialIndex == 0;
    let userStartingPointDiff;
    const maxUser = minUser + userRange - 1;
    if (isTutorial) {
      userStartingPointDiff =
        tutorialArrowPresses +
        rng.getInt(maxUser - minUser - tutorialArrowPresses);
    } else {
      userStartingPointDiff = rng.getInt(maxUser - minUser);
    }
    const userStartingPoint = minUser + userStartingPointDiff;
    const trialHint = currentPhase.hintCreator(this.isExperimental);
    const displayedLeftColor = calcColor(color, maxLight); // Bright.
    const displayeRightColor = calcColor(color, minLight); // Dark.
    return {
      modals: {
        "modal-hint-ack": false,
        "modal-score": false,
      },
      rng: rng,
      isDisplayedHintTrue: false,
      hintCountDown: trialHint.delay,
      isTutorial: isTutorial,
      currentPhase: currentPhase,
      pressedKey: "",
      minUser: minUser,
      maxUser: maxUser,
      hintSide: "",
      hintGroup: rng.getElement(trialHint.groups),
      trialHint: trialHint,
      leftID: "left",
      rightID: "right",
      submitID: "submit",
      tutorialIDs: ["right", "left", "submit"],
      didGiveHint: false,
      tutorialArrowPressesCounter: tutorialArrowPresses,
      currentTutorialID: isTutorial ? firstArrow : null,
      currentTutorialIndex: 0,
      isAlertnessTestOn: currentPhase.alertnessTestIndex == this.trialIndex,
      shouldWitholdInput: false,
      currentTutorialElement: null,
      didFollowHint: false,
      keyPresses: 0,
      displayedHintSide: "",
      didDisplayFeedback: !currentPhase.shouldDisplayFeedback,
      color: color,
      userInput: userStartingPoint,
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
    isCurrentTutorial(btn) {
      return this.isTutorial && this.currentTutorialID === btn;
    },
    getRelativePos() {
      const score = 1 - (this.userInput - minLight) / (maxLight - minLight);
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
        this.userInput,
        minLight + maxGapForUser,
        maxLight - maxGapForUser,
        this.rng.getBool(this.hintGroup.certainty)
      );

      this.displayedHintSide = this.hintSide;
      this.didGiveHint = true;
    },
    toggleTutorial() {
      if (!this.isTutorial) return;
      if (this.currentTutorialID == this.submitID) return;

      this.tutorialArrowPressesCounter -= 1;
      if (this.tutorialArrowPressesCounter == 0) {
        if (this.currentTutorialID === firstArrow) {
          this.currentTutorialID = secondArrow;
          this.tutorialArrowPressesCounter = tutorialArrowPresses;
        } else if (this.currentTutorialID === secondArrow) {
          this.currentTutorialID = this.submitID;
        }
      }
    },
    onSubmit() {
      if (!this.didDisplayFeedback) {
        this.showModal("modal-score");
        this.didDisplayFeedback = true;
        return;
      }
      if (this.enforceHint) {
        this.onHint();
        this.showModal("modal-hint-ack");
        return;
      }
      if (!this.submitVisible || this.shouldWitholdInput) {
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
          isHintEnforced: this.trialHint.isHintEnforced,
          hintDelayS: this.trialHint.delay,
          displayedHintSide: this.hintSide,
          isDisplayedHintTrue: this.isDisplayedHintTrue,
          didFollowHint: this.didFollowHint,
          hintGroupSize: this.hintGroup.size,
          trialTimeMs: Date.now() - this.trialStartTime,
          keyPresses: this.keyPresses,
          isExperimental: this.isExperimental,
        })
      );
    },
    showModal(modalID) {
      this.shouldWitholdInput = true;
      this.modals[modalID] = true;
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
        // Don't add waiting time to trial time.
        this.trialStartTime += 1000 * this.trialHint.delay;
        document.getElementById("hint-timer").innerHTML = "&nbsp;";
        this.onHint();
      }
    },
    keyboardListener(e) {
      if (e.repeat) return;
      switch (e.key) {
        case "ArrowLeft":
          if (this.shouldWitholdInput) return;
          if (
            !this.handlePressedKey("left", this.userInput < this.maxUser, +0.5)
          )
            return;
          break;
        case "ArrowRight":
          if (this.shouldWitholdInput) return;
          if (
            !this.handlePressedKey("right", this.userInput > this.minUser, -0.5)
          )
            return;
          break;
        case "Enter":
          this.onSubmit();
          return;
        default:
          return;
      }
      this.toggleTutorial();
      if (this.displayedHintSide === "correct") {
        this.didFollowHint = false;
      }
      this.displayedHintSide = "";
      if (this.isDev) {
        console.log(
          "middle-user",
          this.userInput,
          "\nmin-user",
          this.minUser,
          "\nmax-user",
          this.maxUser,
          "\n\nmin-light",
          minLight,
          "\nmax-light",
          maxLight,
          "\nrelative-position",
          this.getRelativePos()
        );
      }
      setTimeout(() => {
        this.pressedKey = "";
      }, 100);
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
        this.userInput += diff;
        this.keyPresses += 1;
        return true;
      }
      return false;
    },
    isArrowKeyDisabled(edge) {
      return this.userInput == edge || this.shouldWitholdInput;
    },
  },
  computed: {
    midColor() {
      if (this.overrideMidColor != null) {
        return this.overrideMidColor;
      }
      return calcColor(this.color, this.userInput);
    },
    submitVisible() {
      return this.isTutorial ? this.currentTutorialID === this.submitID : true;
    },
    enforceHint() {
      return this.trialHint.isHintEnforced && this.hintSide === "";
    },
    percentageScore() {
      let score = (this.getRelativePos() * 100).toString();
      // Sometimes, it's still printed as 59.9999999...
      if (score.indexOf(".") > 0) {
        score = score.substr(0, score.indexOf("."));
      }
      return score;
    },
    tutorialContent() {
      if (!this.isTutorial) return null;
      if (this.currentTutorialID === "right") {
        return `Press right on your keyboard ${this.tutorialArrowPressesCounter.toString()} more times and notice how the colour darkens`;
      } else {
        return `Press left on your keyboard ${this.tutorialArrowPressesCounter.toString()} more times and notice how the colour brightens`;
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.keyboardListener);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyboardListener);
  },
  mounted() {
    this.trialStartTime = Date.now();
  },
};
</script>

<style scoped>
.tooltip2 {
  position: relative;
  display: inline-block;
}

.tooltip2 .tooltiptext {
  visibility: hidden;
  width: 15vw;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 0.5vw;
  padding: 1vh 0;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -7.5vw;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip2 .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -1vh;
  border-width: 1vh;
  border-style: solid;
  border-color: transparent transparent #555 transparent;
}

.visible-tooltip .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.row {
  display: flex;
}

.col-left {
  flex: 20%;
}

.col-center {
  flex: 60%;
}

.col-right {
  flex: 20%;
}
</style>
