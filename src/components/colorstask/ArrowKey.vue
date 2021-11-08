<template>
  <div :class="'text-' + (side === 'right' ? 'end' : 'start')">
    <div :class="'d-inline-block' + (isVisible ? '' : ' invisible')">
      <i
        :id="'btn-' + side"
        :class="
          'fs-1 bi bi-arrow-' + side + '-square' + (isPressed ? '-fill' : '')
        "
        :style="'color: ' + (isDisabled ? 'grey' : 'black')"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArrowKey",
  props: {
    side: String,
    initPresses: Number,
    isDisabled: Boolean,
    isVisible: Boolean,
    isPressed: Boolean,
  },
};
</script>
