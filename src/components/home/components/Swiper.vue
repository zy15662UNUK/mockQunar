<template>
  <div id="swiper">
    <swiper :options="swiperOption">
  <!-- slides -->
      <swiper-slide v-for="elem in imgList" :key="elem.id"><img class="swiper-img" :src="elem.src"/></swiper-slide>

  <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "",
  data: function(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {id :1, src:"https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180413_cpm_10487.jpg"},
        {id : 2, src : "//img1.qunarzz.com/vc/8b/7f/9e/cb61ad7ed97e4ff7fb71cf8eb1.jpg"},
        {id : 3, src : "//img1.qunarzz.com/vc/db/f3/43/5f0f1d61aa9070796f319e551f.jpg"},
        {id : 4, src :"//img1.qunarzz.com/vc/c5/77/bd/0ae9ab95338e37b9dc8c8412b2.jpg"}
      ],
    };
  },
}
</script>
<style scoped lang="stylus">
#swiper >>>   .swiper-pagination-bullet-active
    background-color: #ffffff;

  .swiper-img
    width: 100%;
    height: 101.563px;
</style>
