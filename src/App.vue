<template>
<v-stage ref="stage">
  <v-layer ref="layer">
    <v-rect
      ref="rect"
    />
  </v-layer>
</v-stage>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  mounted() {
    const stage = this.$refs.stage.getNode();
    const layer = this.$refs.layer.getNode();
    const rect = this.$refs.rect.getNode();
  }
};
</script>
