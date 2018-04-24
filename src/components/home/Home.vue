<template>
  <div class="">
    <HomeHeader :city="city"></HomeHeader>
    <HomeSwiper :swipeList="swipeList"></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/Icons.vue'
import Recommend from './components/Recommend.vue'
import Weekend from './components/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swipeList: [],
      recommendList: [],
      weekendList: []
    };
  },
  components:{
    HomeHeader: Header,
    HomeSwiper: Swiper,
    HomeIcons: Icons,
    HomeRecommend: Recommend,
    HomeWeekend: Weekend
  },
  mounted() {
    //do something after mounting vue instance
    this.getHomeInfo();

  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json')
           .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      var d = res.data;
      if(d.ret && d.data){
        this.city = d.data.city;
        this.swipeList = d.data.swiperList;
        this.recommendList = d.data.recommendList;
        this.weekendList = d.data.weekendList;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
