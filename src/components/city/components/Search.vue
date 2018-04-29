<template>
  <div class="">
    <div id="Search">
      <input v-model= "input" class= "search-input" type="text" placeholder="输入城市名或者拼音名">
    </div>
    <div v-show="input" ref="search" class="search-result">
      <ul >
        <li @click.naive="handleClickSearchRes(elem)" class="search-result-item" v-for="(elem, index) in list" :key="index">{{elem}}</li>
        <li v-show="!list.length" @click.naive="handleClickSearchRes(this.$store.state.city)" class="search-result-item">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapActions, mapState } from 'vuex'
export default {
  name: "Search",
  props: ['cities'],
  data: function(){
    return {
      input: "",
      timer: null,
      list: [],
    };
  },
  mounted() {
    //do something after mounting vue instance
    this.scroll = new BScroll(this.$refs.search);
  },
  watch: {
    input: function(){
      if (this.timer){
        clearTimeout(this.timer);
      }// 涉及计算量很大，做一个节流处理
      var self = this;
      this.timer = setTimeout(()=>{
        var result = [];
        if (this.input != ""){
          for(var i in self.cities){
            self.cities[i].forEach((val)=>{
              if (val.spell.indexOf(self.input) > -1 || val.name.indexOf(self.input) > -1){
                result.push(val.name);
              }
            });
          }
          this.showSearch = true;
          this.list = result;
        }else{
          this.handleClickSearchRes();
        }
      }, 100);
    }
  },
  methods: {
    ...mapActions(['cityChange']),
    handleClickSearchRes(elem) {
      this.cityChange(elem);// 触发vuex 的 store 中cityChange这个action
      this.$router.push('/');// 编程式路由，使页面路由至'/'也就是首页
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/variables.styl'
  #Search
    background-color: $bgColor;
    text-align: center;
    line-height: 0.86rem;
    padding: 0 0.1rem;
    .search-input
      width: 100%;
      border-radius: 0.06rem;
      height: 0.6rem;
      text-align: center;
      color: #666;
      box-sizing: border-box;
      padding: 0 0.1rem;
  .search-result
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.76rem;
    left: 0;
    right: 0;
    bottom: 0;
    .search-result-item
      list-style: none;
      line-height: 0.6rem;
      background-color: white;
      padding-left: 0.2rem;
      font-size: 0.3rem;
      border-bottom: 1px solid #eee;
</style>
