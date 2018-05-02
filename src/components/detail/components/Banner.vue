<template>
  <div id="Banner" @click="gallaryShow">
    <img :src="bannerImg"
         alt="banner-img"
         class="banner-img"
    >
    <div class="banner-info">
      <div class="banner-text">{{sightName}}</div>
      <div class="banner-num"><i class="far fa-images"></i> {{gallaryImgs.length}}</div>
    </div>
    <commonGallary :swipeList="gallaryImgs" v-show="showGallary"></commonGallary>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Gallary from '../../common/Gallary.vue'
export default {
  name: "Banner",
  props: ['sightName', 'bannerImg', 'gallaryImgs'],
  computed: {
    ...mapState(["showGallary"]),
  },
  data: function () {
    return {
      swipeList:  ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
    };
  },
  components: {
    "commonGallary": Gallary,
  },
  methods: {
    ...mapMutations(["gallaryShow"])
  }
}
</script>
<style lang="stylus" scoped>
  #Banner
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img
      width: 100%;
    .banner-info
      flex: 1;  /* 撑开页面 */
      position: absolute;
      top: 48vw; /* 固定位置 */
      left: 0;
      right: 0;
      line-height: 0.6rem;
      display: flex;
      .banner-text
        text-align: center;
        width: 66.6%;
        padding: 0 0.2rem;
        color: white;
        font-size: 0.33rem;
        font-weight: bold;
      .banner-num
        text-align: right;
        width: 33.3%;
        padding: 0 0.2rem;
        color: white;
        font-size: 0.33rem;

</style>
