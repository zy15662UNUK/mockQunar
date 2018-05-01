<template>
  <div id="header">
    <div class="header-left float-left">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <div class="header-right float-right">
       <router-link :to="{ name: 'City'}">{{this.city}} </router-link><i class="fas fa-sort-down"></i>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Header",
  data: function(){
    return {

    };
  },
  computed: {
    ...mapState(["city"]),
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .fas
    font-size: 0.4rem
    margin-top: 0.25rem;
  #header
    display: flex
    line-height: .86rem
    background-color: $bgColor;
    color: white

    .header-left
      width: 0.64rem
      text-align: center


    .header-input
      flex: 1;
      color: #ccc
      background-color: #ffffff;
      margin-top: 0.12rem;
      height: 0.64rem; /* 设置上边距+高度避免设置上下边距导致外部边框撑大/ */
      line-height: 0.64rem;/* 使文字上下居中，和上一条合作避免下部触底 */
      margin-left: 0.2rem;
      border-radius: 0.1rem;
      padding-left: 0.2rem;

    .header-right
      min-width: 1.04rem;
      padding: 0 0.1rem;
      text-align: center
</style>
