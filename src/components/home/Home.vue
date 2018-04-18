<template>
  <div class="">
    <HomeHeader></HomeHeader>
    <h1>hello world</h1>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {

    };
  },
  components:{
    HomeHeader: Header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
