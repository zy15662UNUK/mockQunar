<template>
  <div id="fade">
    <transition name="fade">
      <slot></slot>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Fade",
  data: function () {
    return {

    };
  }
}
</script>
<style lang="stylus" scoped>
  .fade-enter, .fade-leave-to
    opacity: 0;
  .fade-enter-active, .fade-leave-active
    transition: opacity 1s;
</style>
