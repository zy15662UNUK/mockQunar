<template>
  <div id="list">
    <div class="wrapper">
      <div class="area">
        <div class="title">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <button type="button" class="button">北京</button>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for="elem in hotCities" :key="elem.id">
            <button type="button" class="button">{{elem.name}}</button>
          </div>
        </div>
      </div>
      <div class="area" v-for="(elem, key) in cities" :key="key" :ref="key">
        <div class="title">
          {{key}}
        </div>
        <div class="line-list" v-for="item in elem" :key="item.id">
          <div class="list">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "List",
  props: ['cities', 'hotCities'],
  data: function(){
    return {

    };
  },
  mounted() {
    //do something after mounting vue instance
    const wrapper = document.getElementById('list');
    this.scroll = new BScroll(wrapper);
    var self = this;
    this.bus.$on("change", function(letter){//当页面渲染完成后，给bus加一个监听点击/滑动字母改变的事件
      self.scrollToLetter(letter);//调用对应处理函数
    })
  },
  methods: {
    scrollToLetter(letter) {
      // 下面是点击字母切换到对应部分这个功能
      const ele = this.$refs[letter][0];//this.$refs[letter]是一个数组，其第一个元素才是DOM元素
      // 给每个元素加一个:ref="key"，再用this.$refs[key][0]来调用叫key的元素，比jquery方便
      this.scroll.scrollToElement(ele);//接受的ele必须是一个元素
    }
  }
}
</script>
<style lang="stylus" scoped>
  #list
    overflow: hidden;
    position: absolute;
    top: 1.78rem;
    left: 0;
    right: 0;
    bottom: 0;
    /* 这里的意义在于卡死列表页面，让屏幕显示不了的部分隐藏，且不可上下滚动 */
    /* 目的是为了使用betterscroll插件，和布置侧面字母索引列表 */
  .line-list
    .list
      font-size: 0.3rem;
      line-height: 0.84rem;
      border-bottom: 1px solid #ccc;
      padding-left: 0.2rem;
  .button-list
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding-right: 0.6rem;
    /* 给右侧字母留出空间 */
    .button-wrapper
      font-size: 0.3rem;
      width: 33.3%;
      padding: 0.3rem 0.2rem;
      text-align: center;
      .button
        width: 100%;
        border-radius: 0.06rem;
        border: 0.02rem solid #ccc;
        background-color: #ffffff;
        padding: 0.1rem 0;
  .title
    font-size: 0.3rem;
    line-height: 0.8rem;
    background-color: #eee;
    font-weight: 800;
    padding: 0.1rem 0.2rem;
    border-bottom: 1px solid #ccc;
</style>
