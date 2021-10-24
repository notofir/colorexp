<template>
    <div>
        <Button @btn-click="onClick" :content="hintContent" :disabled="displayedHint.length > 0" />
        <div v-if="displayedHint.length > 0">
            <i :class="'fa-solid fa-' + displayedHint"></i>
        </div>
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
          displayedHint: "",
          hintContent: `
          <h2 class="hint-text-top">
              לחצו לקבלת רמז <i class='fa-solid fa-lightbulb fa-1x'></i>
            </h2>
          <h2 class="hint-text-bottom">
            <i class='fa-solid fa-user-group fa-1x'></i>
            <br />
          ` + this.hintSize + `</h2>`
      };
  },
  emits: ["hint-click"],
  methods: {
    onClick() {
        // TODO randomize direction
        // Left arrow 
        // Center V
            ///return `<div id="hint-increase" class="d-none hint"><i class="bi bi-arrow-right" style="position: absolute; top: ` + (150 - size / 2) + 'px; left:' + (500 - size / 2) + 'px; font-size:40pt"></i>'
            ///+ '<h3 style="position: absolute; top: ' + (100 - size / 2) + 'px; left:' + (400 - size / 2) + `px; font-size:40pt"><i class="bi bi-people-fill"></i><br/>${randomSampleSize}</h3>`
            ///+ '</div>'
            this.displayedHint = "arrow-left";
    },
  },
};
</script>

<style>
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
</style>
