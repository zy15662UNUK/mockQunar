<template>
  <div class="">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {

    };
  },
  components:{
    HomeHeader: Header,
    HomeSwiper: Swiper
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
