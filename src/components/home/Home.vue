<template>
  <div class="">
    <HomeHeader></HomeHeader>
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
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      swipeList: [],
      recommendList: [],
      weekendList: [],
      lastCity: "",
    };
  },
  computed: {
    ...mapState(['city']),
  },
  components:{
    HomeHeader: Header,
    HomeSwiper: Swiper,
    HomeIcons: Icons,
    HomeRecommend: Recommend,
    HomeWeekend: Weekend
  },
  mounted() {// 页面被重新渲染时候才会执行，如果是加载已经被缓存的页面是不会被执行的
    //do something before creating vue instance
    this.lastCity = this.city; // 页面被首次加载时，储存当前城市
    this.getHomeInfo();
  },
  activated () {// 页面被重新加载时候执行，如果是加载已经被缓存的页面也是会被执行的
    if (this.lastCity !== this.city) {// 当储存城市和vuex中城市不同时，说明选择了新城市，需要重新加载页面
      this.lastCity = this.city;// 更新储存城市到当前城市
      this.getHomeInfo();// 发送Ajax请求刷新页面
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json?city=' + this.city)// 发送请求时候也要加上城市名
           .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      var d = res.data;
      if(d.ret && d.data){
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
