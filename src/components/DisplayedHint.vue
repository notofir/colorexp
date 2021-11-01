<template>
  <div class="m-0">
    <div class="row">
      <div v-if="side === 'correct'" class="col">
        <i class="fs-1 bi bi-check-circle"></i>
      </div>
      <div v-else class="d-flex align-items-center">
        <div
          :class="
            'col my-auto order-' + (side === 'left' ? 'last' : 'first me-2')
          "
        >
          <i class="fs-1 bi bi-people-fill"></i>
          <br />
          <h2>
            {{ size }}
          </h2>
        </div>
        <div class="col">
          <i :class="'fs-2 bi bi-arrow-' + side"></i>
        </div>
        <div
          :class="'col order-' + (side === 'left' ? 'first me-2' : 'last')"
        ></div>
      </div>
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
