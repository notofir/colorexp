<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <Hint
          @hint-click="onHint"
          :phaseIndex="phaseIndex"
          :trialIndex="trialIndex"
        />
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">
        <DisplayedHint v-if="hint.side === 'left'" :hint="hint" />
      </div>
      <div class="col">
        <div class="btn-group" role="group">
          <Button @btn-click="onChoose('left')" content="שמאל" />
          <Button @btn-click="onChoose('right')" content="ימין" />
        </div>
      </div>
      <div class="col">
        <DisplayedHint v-if="hint.side === 'right'" :hint="hint" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import Hint from "../Hint.vue";
import DisplayedHint from "../DisplayedHint.vue";

export default {
  name: "ScatterSurvey",
  components: { Hint, Button, DisplayedHint },
  props: {
    phaseIndex: Number,
    trialIndex: Number,
  },
  data() {
    return {
      hint: { side: "", size: 0 },
    };
  },
  emits: ["survey-finish"],
  methods: {
    onHint(hint) {
      this.hint = hint;
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
  },
};
</script>

<style scoped></style>
