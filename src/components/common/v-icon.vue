<template>
    <i :class="'icon-vIcon-' + name " :style="'font-size:' + size + 'vw'"></i>
</template>

<script>
export default {
  name: "vIcon",
  props: {
    name: String,
    size: {
      type: Number,
      default: 1.5
    }
  }
}
</script>

<style>
@import "~@/assets/icon/iconfont.css";
</style>
