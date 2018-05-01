<template>
  <div id="gallary">
    <div class="wrapper"  @click="gallaryShow">
      <div class="swiper">
        <swiper :options="swiperOption" v-if="swipeList.length">
          <!-- 这里v-if的作用是让swiper在轮播数据传入后再显示，否则最后一张图会最先出现 -->
      <!-- slides -->
          <swiper-slide v-for="(elem, index) in swipeList" :key="index"><img class="swiper-img" :src="elem"/></swiper-slide>

      <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: "Gallary",
  props: ['swipeList'],
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', //设置轮播图底下pagination为1/2这种格式
        observeParents: true,//这一点和下面一点都是为了修复v-show导致swiper无法正常移动的问题
        observer: true //总之如果要对含有swiper的组件使用v-show，swiper设置必须加上这两点
      }
    };
  },
  methods: {
    ...mapMutations(["gallaryShow"])//控制显隐画廊的mutations方法
  }
}
</script>
<style lang="stylus" scoped>
  #gallary
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .swiper
      overflow: inherient;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .swiper-container
        overflow: inherit; /* 目的是让下移的pagination能够显示出来，默认是overflow: hidden */
      .swiper-pagination
        position: absolute;
        color: white;
        font-size: 0.3rem;
        bottom: -1rem;
      .swiper-img
        width: 100%;
</style>
