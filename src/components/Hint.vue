<template>
  <div class="row">
    <div class="col align-items-center justify-content-center">
      <Button
        @btn-click="onClick"
        :content="hintContent"
        :disabled="isClicked"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Hint",
  components: { Button },
  props: {
    hintGroupSize: Number,
  },
  data() {
    return {
      isClicked: false,
      hintContent:
        `
          <h5>
              Press for hint <i class='bi bi-lightbulb-fill'></i>
            </h5>
          <h5>
            <i class='h4 bi bi-people-fill'></i>
            <br />
          ` +
        this.hintGroupSize +
        `</h5>`,
    };
  },
  emits: ["hint-click"],
  methods: {
    onClick() {
      this.isClicked = true;
      this.$emit("hint-click");
    },
  },
};
</script>

<style></style>
