<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <Hint
          @hint-click="onHint"
          :hintGroupSize="hintGroup.size"
        />
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">
        <DisplayedHint v-if="displayedHintSide === 'left'" :side="hintSide" :size="hintGroup.size" />
      </div>
      <div class="col">
        <div class="btn-group" role="group">
          <Button @btn-click="onChoose('left')" content="left" />
          <Button @btn-click="onChoose('right')" content="right" />
        </div>
      </div>
      <div class="col">
        <DisplayedHint v-if="displayedHintSide === 'right'" :side="hintSide" :size="hintGroup.size" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import Hint from "../Hint.vue";
import DisplayedHint from "../DisplayedHint.vue";
import getRNG from "../../seededrandom";
import phases from "../../phases";

export default {
  name: "ScatterSurvey",
  components: { Hint, Button, DisplayedHint },
  props: {
    phaseIndex: Number,
    trialIndex: Number,
    leftSize: Number,
    rightSize: Number,
    isExperimental: Boolean,
  },
  data() {
    const rng = getRNG("scatter-survey", this.phaseIndex, this.trialIndex);
    const currentPhase = phases[this.phaseIndex];
    const trialHint = currentPhase.hintCreator(this.isExperimental);
    const hintGroup = rng.getElement(trialHint.groups);
    let hintSide, isDisplayedHintTrue;
    [hintSide, isDisplayedHintTrue] = this.getDisplayedHint(
      rng.getBool(hintGroup.certainty)
    );
    return {
      hintGroup: hintGroup,
      displayedHintSide: null,
      didGiveHint: false,
      isDisplayedHintTrue: isDisplayedHintTrue,
      hintSide: hintSide,
    };
  },
  emits: ["survey-finish"],
  methods: {
    onHint() {
      this.displayedHintSide = this.hintSide;
      this.didGiveHint = true;
    },
    onChoose(pickedSide) {
      this.$emit(
        "survey-finish",
        this.hint.side === "",
        pickedSide,
        this.hint.side === pickedSide,
        this.hint.size
      );
    },
    getDisplayedHint(isDefaultTrue) {
      let actualDirection, misdirection;
      if (this.rightSize > this.leftSize) {
        misdirection = "left";
        actualDirection = "right";
      } else {
        misdirection = "right";
        actualDirection = "left";
      }
      console.log(isDefaultTrue, actualDirection, misdirection);
      return [isDefaultTrue ? actualDirection : misdirection, isDefaultTrue];
    },
  },
};
</script>

<style scoped></style>
