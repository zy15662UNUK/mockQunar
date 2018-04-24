<template>
  <div id="Weekend">
    <div class="title">
      <p class="title-text">周末去哪儿</p>
    </div>
    <ul class="item-list">
      <li class="item" v-for="elem in weekendList" :key="elem.id">
        <div class="img-wrapper">
          <img :src="elem.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-text">
          <p class="item-header">{{elem.title}}</p>
          <p class="item-desc">{{elem.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Weekend",
  props: ['weekendList'],
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
      font-size: 0.3rem;
  .item
    overflow: hidden;
    margin-bottom: 0.2rem;
    .img-wrapper
      height: 0px;
      overflow: hidden;
      padding-bottom: 37.09%
      .item-img
        width: 100%;
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
</style>
