<template>
  <div class="container my-auto">
    <div class="row my-auto">
      <div v-if="hint.side == 'correct'" class="col">
        <h1>
          <i class="bi bi-check-circle"></i>
          <div v-if="hint.size > 0">
            <br />
            {{ hint.size }}
          </div>
        </h1>
      </div>
      <div v-else>
        <div
          :class="
            'col my-auto order-' + (hint.side === 'left' ? 'last' : 'first')
          "
        >
          <h1>
            <i class="bi bi-people-fill"></i>
            <br />
            {{ hint.size }}
          </h1>
        </div>
        <div class="col">
          <i :class="'h1 bi bi-arrow-' + hint.side"></i>
        </div>
        <div
          :class="'col order-' + (hint.side === 'left' ? 'first' : 'last')"
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
