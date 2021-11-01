<template>
  <div v-if="side === 'correct'">
    <i class="fs-1 bi bi-check-circle"></i>
  </div>
  <div v-else class="row">
    <div
      :class="
        'col my-auto p-0 order-' + (side === 'left' ? 'last' : 'first ms-4')
      "
    >
      <i class="fs-1 bi bi-people-fill"></i>
      <br />
      <h2>
        {{ size }}
      </h2>
    </div>
    <div
      :class="
        'col my-auto p-0 order-' + (side === 'left' ? 'first ms-4' : 'last')
      "
    >
      <i :class="'fs-2 bi bi-arrow-' + side"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayedHint",
  props: {
    side: String,
    size: Number,
  },
};
</script>

<style></style>
