<template>
  <div id="header">
    <div class="header-left float-left">
      <router-link :to="{ name: 'Home'}"><i class="fas fa-chevron-left"></i></router-link>
    </div>
    <!-- <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div> -->
    <div class="header-title">
      城市选择
    </div>
    <div class="header-right float-right">
       <!-- <router-link :to="{ name: 'City'}">{{this.city}} </router-link><i class="fas fa-sort-down"></i> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    city: String
  },
  data: function(){
    return {

    };
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
    text-align: center
    .header-left
      width: 0.64rem
      text-align: center

    .header-title
      flex: 1;
      font-size: 0.35rem
      color: #fffff
      margin-top: 0.12rem;
      height: 0.64rem; /* 设置上边距+高度避免设置上下边距导致外部边框撑大/ */
      line-height: 0.64rem;/* 使文字上下居中，和上一条合作避免下部触底 */
      margin-left: 0.2rem;
      border-radius: 0.1rem;
      padding-left: 0.2rem;
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
      width: 1.24rem;
      text-align: center
</style>
