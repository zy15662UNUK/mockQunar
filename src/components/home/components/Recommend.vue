<template>
  <div id="Recommend">
    <div class="title">
      <p class="title-text">热销推荐</p>
    </div>
    <ul class="item-list">
      <router-link tag="li" :to="'/detail/' + elem.id" class="item" v-for="elem in recommendList" :key="elem.id">
        <img :src="elem.imgUrl" alt="" class="item-img">
        <div class="item-text">
          <p class="item-header">{{elem.title}}</p>
          <p class="item-desc">{{elem.desc}}</p>
          <button type="button" class="item-detail">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  props: ['recommendList'],
  data: function(){
    return {
    };
  }
}
</script>
<style lang="stylus" scoped>
@import '..\..\..\assets\styles\mixins.styl'
  .title
    line-height: 0.8rem;
    font-weight: 900;
    background-color: #eee;
    .title-text
      margin: 0.1rem 0.2rem;
      font-size: 0.3rem;
  .item
    height: 1.9rem;
    overflow: hidden;
    display: flex;
    .item-img
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    .item-text
      margin: 0.1rem 0.2rem;
      flex: 1;
      min-width: 0;
      /* 撑开box，使之铺满余下空间 */
      .item-header
        line-height: 0.54rem;
        font-weight: 900;
        font-size: 0.3rem;
        ellipsis();
      .item-desc
        line-height: 0.4rem;
        color: #ccc
        ellipsis();
      .item-detail
        margin-left: 0.2rem;
        padding: 0 0.1rem;
        background-color: #ff9300;
        border-radius: 0.06rem;
        color: #fff

</style>
