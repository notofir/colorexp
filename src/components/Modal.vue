<template>
  <div
    :id="id"
    class="w3-modal w3-animate-opacity modal-container"
    style="display: block"
  >
    <div class="w3-modal-content modal-content">
      <header
        class="w3-container py-3 text-start modal-header"
        style="color: black"
        v-html="header"
      ></header>
      <div class="w3-container" style="color: black" v-html="body"></div>
      <footer class="w3-container py-3 text-end modal-footer">
        <div class="btn-group">
          <Button @btn-click="onClick" content="ok" />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Modal",
  components: { Button },
  props: {
    id: String,
    header: String,
    body: String,
  },
  methods: {
    onClick() {
      this.$emit("modal-close", this.id);
    },
    keyboardListener(e) {
      if (e.repeat) return;
      switch (e.key) {
        case "Enter":
          this.$emit("modal-close", this.id);
          return;
        default:
          return;
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.keyboardListener);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyboardListener);
  },
  emits: ["modal-close"],
};
</script>

<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";

.modal-container {
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-content {
  width: 60%;
}

.modal-header {
  border-bottom: 0.1vw solid rgba(190, 190, 190, 0.5);
}

.modal-footer {
  border-top: 0.1vw solid rgba(190, 190, 190, 0.5);
  display: flex;
  justify-content: right;
  padding-top: 1vh;
  padding-bottom: 1vh;
}
</style>
