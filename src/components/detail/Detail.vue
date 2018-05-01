<template>
  <div id="detail">
    <detailBanner></detailBanner>
    <detailHeader></detailHeader>
    <div style="height: 50rem">

    </div>
  </div>
</template>
<script>
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
export default {
  name: "Detail",
  data: function () {
    return {

    };
  },
  components: {
    "detailBanner": Banner,
    "detailHeader": Header
  }
}
</script>
<style lang="stylus" scoped>
</style>
