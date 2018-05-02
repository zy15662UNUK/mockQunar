<template>
  <div id="List">
    <div class="title-wrap" v-for="(elem, index) in list" :key="index">
      <div class="title">
        <span class="title-icon"></span>{{elem.title}}
      </div>
      <List v-if="elem.children" :list="elem.children" class="children"></List>
      <!-- 此处使用递归组件，自己引用自己，组件名称和底下写的name相同。首先检查数据中有没有childrenlist -->
      <!-- 然后把children这个list传入自引组件中作为循环的内容 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: ['list'],
  data: function () {
    return {

    };
  }
}
</script>
<style lang="stylus" scoped>
  .title
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    border-bottom: 1px solid #eee;
    .title-icon
      display: inline-block;
      width: .36rem;
      height: .36rem;
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
  .children
    padding-left: 0.2rem;
</style>
