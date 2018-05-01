<template>
  <div id="detail">
    <detailBanner></detailBanner>
  </div>
</template>
<script>
import Banner from './components/Banner.vue'
export default {
  name: "Detail",
  data: function () {
    return {

    };
  },
  components: {
    "detailBanner": Banner,
  }
}
</script>
<style lang="stylus" scoped>
</style>
