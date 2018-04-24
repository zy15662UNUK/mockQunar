<template>
  <div class="">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/Icons.vue'
import Recommend from './components/Recommend.vue'
import Weekend from './components/Weekend.vue'
export default {
  name: 'Home',
  data () {
    return {

    };
  },
  components:{
    HomeHeader: Header,
    HomeSwiper: Swiper,
    HomeIcons: Icons,
    HomeRecommend: Recommend,
    HomeWeekend: Weekend
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
