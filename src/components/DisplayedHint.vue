<template>
  <div class="container">
    <div class="row">
      <div v-if="hint.side === 'correct'" class="col">
        <i class="fs-1bi bi-check-circle"></i>
        <br />
        <h2>{{ hint.size }}</h2>
      </div>
      <div v-else class="d-flex align-items-center">
        <div
          :class="
            'col my-auto order-' +
            (hint.side === 'left' ? 'last' : 'first me-2')
          "
        >
          <i class="fs-1 bi bi-people-fill"></i>
          <br />
          <h2>
            {{ hint.size }}
          </h2>
        </div>
        <div class="col">
          <i :class="'fs-2 bi bi-arrow-' + hint.side"></i>
        </div>
        <div
          :class="'col order-' + (hint.side === 'left' ? 'first me-2' : 'last')"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayedHint",
  props: {
    hint: Object,
  },
};
</script>

<style></style>
