<template>
  <div :class="'text-' + (side === 'right' ? 'end' : 'start')">
    <span
      :id="'btn-' + side"
      :class="'d-inline-block' + (isInvisible ? ' invisible' : '')"
      data-bs-trigger="manual"
      :data-bs-placement="side"
      :data-bs-content="
        'Press ' +
        side +
        ' key on your keyboard ' +
        initPresses.toString() +
        ' times'
      "
    >
      <i
        :class="
          'fs-1 bi bi-arrow-' + side + '-square' + (isPressed ? '-fill' : '')
        "
        :style="isDisabled ? 'color: grey' : ''"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    side: String,
    initPresses: Number,
    isDisabled: Boolean,
    isInvisible: Boolean,
    isPressed: Boolean,
  },
};
</script>
