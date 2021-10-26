<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <Hint @hint-click="onHint" :hintSize="5" />
      </div>
      <div class="col"></div>
    </div>
    <div class="row top-buffer">
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
import Button from "./Button.vue";
import Hint from "./Hint.vue";
import DisplayedHint from "./DisplayedHint.vue";

export default {
  name: "Survey",
  components: { Hint, Button, DisplayedHint },
  data() {
      return {
        hint: {"side": ""},
      };
  },
  emits: ["survey-finish"],
  methods: {
    onHint(hint) {
      this.hint = hint;
    },
    onChoose(hint) {
      console.log(hint)
      this.$emit('survey-finish', hint)
    },
  },
};
</script>

<style scoped>
.survey {
  max-width: 95%;
  text-align: center;
  margin: auto;
}
</style>
