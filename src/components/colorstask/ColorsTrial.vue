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
            <div
              :class="
                'tooltip2' +
                (currentTutorialID === leftID ? ' visible-tooltip' : '')
              "
            >
              <ArrowKey
                side="left"
                :isVisible="!(currentTutorialID === rightID)"
                :isPressed="pressedKey == 'left'"
                :isDisabled="isArrowKeyDisabled(maxMid)"
              />
              <span class="tooltiptext"> {{ tutorialContent }} </span>
            </div>
          </div>
          <div class="col"></div>
          <div class="col">
            <div
              :class="
                'tooltip2' +
                (currentTutorialID === rightID ? ' visible-tooltip' : '')
              "
            >
              <ArrowKey
                side="right"
                :isVisible="!(currentTutorialID === leftID)"
                :isPressed="pressedKey == 'right'"
                :isDisabled="isArrowKeyDisabled(minMid)"
              />
              <span class="tooltiptext"> {{ tutorialContent }} </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col my-auto">
            <div
              :class="
                'tooltip2' +
                (currentTutorialID === submitID || isAlertnessTestOn
                  ? ' visible-tooltip'
                  : '')
              "
            >
              <Button
                @btn-click="onSubmit"
                :content="submitID"
                :isVisible="isTutorial ? currentTutorialID === submitID : true"
                :disabled="shouldWitholdInput"
              />
              <span v-if="isTutorial" class="tooltiptext"
                >Press the submit button when you believe you're done</span
              >
              <span v-else class="tooltiptext"
                >ALERTNESS TEST<br />for this trial, select the darkest
                shade</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <Modal
      id="modal-hint-ack"
      @modal-close="shouldWitholdInput = false"
      header="<h3>Hint received</h3>"
    />
    <Modal
      v-if="currentPhase.shouldDisplayFeedback"
      id="modal-score"
      @modal-close="
        shouldWitholdInput = false;
        didDisplayFeedback = true;
        onSubmit();
      "
      :header="`<h4 class='modal-title'>Score: ` + percentageScore + `%</h4>`"
      :body="
        `
      <div class='container-fluid'>
        <div class='row align-items-end'>
          <div class='col p-0'>
            <p class='text-start mb-0'><b>0</b></p>
          </div>
          <div class='col p-0'>
            <p class='text-center mb-0'><b>50</b></p>
          </div>
          <div class='col p-0'>
            <p class='text-end mb-0'><b>100</b></p>
          </div>
        </div>
        <div class='row'>
          <input id='score-range' type='range' class='form-range' min='0' max='100' value='` +
        percentageScore +
        `' disabled />
        </div>
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
  console.log(isDefaultTrue, actualDirection, misdirection);
  return [isDefaultTrue ? actualDirection : misdirection, isDefaultTrue];
}

export default {
  name: "ColorsTrial",
  components: { Button, Modal, Hint, DisplayedHint, Square, ArrowKey },
  props: {
    phaseIndex: Number,
    trialIndex: Number,
    isExperimental: Boolean,
  },
  data() {
    console.log(this.phaseIndex, this.trialIndex);
    const rng = getRNG("colors", this.phaseIndex, this.trialIndex);
    const color = getRandomColor(rng);
    const minGap = 5;
    const currentPhase = phases[this.phaseIndex];
    const isTutorial = currentPhase.isTutorial && this.trialIndex == 0;
    let midLightDiff;
    // Not allowing to get too close to the ends, nor calculating the middle.
    const maxMid = maxLight - (minGap + rng.getInt(maxGapForUser - minGap));
    let minMid = minLight + (minGap + rng.getInt(maxGapForUser - minGap));
    // We need to enforce absolute middle.
    if ((maxMid - minMid) % 2 != 0) {
      minMid -= 1;
    }
    if (isTutorial) {
      midLightDiff =
        tutorialArrowPresses +
        rng.getInt(maxMid - minMid - tutorialArrowPresses);
    } else {
      midLightDiff = rng.getInt(maxMid - minMid);
    }
    const midLight = minMid + midLightDiff;
    const trialHint = currentPhase.hintCreator(this.isExperimental);
    const displayedLeftColor = calcColor(color, maxLight); // Bright.
    const displayeRightColor = calcColor(color, minLight); // Dark.
    return {
      rng: rng,
      isDisplayedHintTrue: false,
      hintCountDown: trialHint.delay,
      isTutorial: isTutorial,
      currentPhase: currentPhase,
      pressedKey: "",
      minMid: minMid,
      maxMid: maxMid,
      hintSide: "",
      hintGroup: rng.getElement(trialHint.groups),
      trialHint: trialHint,
      autoHintCounter:
        trialHint.autoHintClicks.min +
        rng.getInt(
          trialHint.autoHintClicks.max + 1 - trialHint.autoHintClicks.min
        ),
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
    isCurrentTutorial(btn) {
      return this.isTutorial && this.currentTutorialID === btn;
    },
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
          isAutoHint: this.trialHint.autoHintClicks.min > 0,
          hintDelayS: this.trialHint.delay,
          displayedHintSide: this.hintSide,
          isDisplayedHintTrue: this.isDisplayedHintTrue,
          didFollowHint: this.didFollowHint,
          hintGroupSize: this.hintGroup.size,
          trialTimeMs: new Date() - this.trialStartTime,
          keyPresses: this.keyPresses,
          isExperimental: this.isExperimental,
        })
      );
    },
    showModal(modalId) {
      this.shouldWitholdInput = true;
      document.getElementById(modalId).style.display = "block";
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
      if (this.shouldWitholdInput) return;
      switch (e.key) {
        case "ArrowLeft":
          if (!this.handlePressedKey("left", this.midLight < this.maxMid, +1))
            return;
          break;
        case "ArrowRight":
          if (!this.handlePressedKey("right", this.midLight > this.minMid, -1))
            return;
          break;
        default:
          return;
      }
      this.toggleTutorial();
      if (this.displayedHintSide === "correct") {
        this.didFollowHint = false;
      }
      this.displayedHintSide = "";
      console.log(
        "middle-user",
        this.midLight,
        "\nmin-user",
        this.minMid,
        "\nmax-user",
        this.maxMid,
        "\n\nmin-light",
        minLight,
        "\nmax-light",
        maxLight,
        "\nrelative-position",
        this.getRelativePos()
      );
      setTimeout(() => {
        this.pressedKey = "";
      }, 100);
      if (this.autoHintCounter == 0) {
        this.shouldWitholdInput = true;
        this.onHint();
        this.showModal("modal-hint-ack");
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
      return (
        "Press the " +
        this.currentTutorialID.substr(0, this.currentTutorialID.indexOf("-")) +
        " arrow key " +
        this.tutorialArrowPressesCounter.toString() +
        " more times"
      );
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
  },
};
</script>

<style>
.tooltip2 {
  position: relative;
  display: inline-block;
}

.tooltip2 .tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip2 .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #555 transparent;
}

.visible-tooltip .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
