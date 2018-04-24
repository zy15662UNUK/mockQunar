<template>
  <div id="swiper">
    <swiper :options="swiperOption" v-if="swipeList.length">
  <!-- slides -->
      <swiper-slide v-for="elem in swipeList" :key="elem.id"><img class="swiper-img" :src="elem.imgUrl"/></swiper-slide>

  <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "",
  props: ['swipeList'],
  data: function(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
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
