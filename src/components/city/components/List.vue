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
          <div class="button-wrapper">
            <button type="button" class="button">北京</button>
          </div>
          <div class="button-wrapper">
            <button type="button" class="button">北京</button>
          </div>
          <div class="button-wrapper">
            <button type="button" class="button">北京</button>
          </div>
          <div class="button-wrapper">
            <button type="button" class="button">北京</button>
          </div>
          <div class="button-wrapper">
            <button type="button" class="button">北京</button>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">
          A
        </div>
        <div class="line-list">
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title">
          A
        </div>
        <div class="line-list">
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
          <div class="list">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "List",
  data: function(){
    return {};
  },
  mounted() {
    //do something after mounting vue instance
    const wrapper = document.getElementById('list');
    this.scroll = new BScroll(wrapper);
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
