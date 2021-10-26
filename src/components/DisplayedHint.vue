<template>
  <div class="container-fluid">
    <div class="row">
      <div :class="'col order-' + (hint.side === 'left'? 'last': 'first')">
         <h1>
          <i class="bi bi-people-fill"></i>
          <br />
          {{ hint.size }}
          </h1>
      </div>
      <div class="col">
          <i :class="'h1 bi bi-arrow-' + hint.side"></i>
      </div>
      <div :class="'col order-' + (hint.side === 'left'? 'first': 'last')"></div>
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
