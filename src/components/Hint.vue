<template>
  <div>
    <Button @btn-click="onClick" :content="hintContent" :disabled="isClicked" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Hint",
  components: { Button },
  props: {
    hintSize: Number,
  },
  data() {
    return {
      isClicked: false,
      hintContent:
        `
          <h5>
              לחצו לקבלת רמז <i class='bi bi-lightbulb-fill'></i>
            </h5>
          <h5>
            <i class='h4 bi bi-people-fill'></i>
            <br />
          ` +
        this.hintSize +
        `</h5>`,
    };
  },
  emits: ["hint-click"],
  methods: {
    onClick() {
      this.isClicked = true;
      let side;
      if (Math.random() > 0.5) {
        side = "right";
      } else {
        side = "left";
      }
      this.$emit("hint-click", { side: side, size: this.hintSize });
    },
  },
};
</script>

<style>
/*
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css";

.survey {
  max-width: 95%;
  text-align: center;
  margin: auto;
}

.hint-text-top {
   margin-top: 3px;
}

.hint-text-bottom {
   margin-bottom: 2px;
}

i.fa-arrow-left {
    position: absolute;
    top: 125px;
    left: 650px;
    font-size: 40pt;
}

i.fa-arrow-right {
    position: absolute;
    top: 125px;
    right: 650px;
    font-size: 40pt;
}
*/
</style>
