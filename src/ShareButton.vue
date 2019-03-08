<template>
  <div :class="['social-share-button', `social-share-button-${network}`]">
    <div :style="{'width': size + 'px', 'height': size + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "share-button",
  props: {
    size: {
      type: Number,
      default: 32
    },
    round: {
      type: Boolean,
      default: false
    },
    network: {
      type: String,
      required: true
    }
  }
};
</script>
