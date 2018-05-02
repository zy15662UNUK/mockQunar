<template>
  <div id="header">
    <router-link :to="{name: 'Home'}" tag="div" v-show="show">
      <div class="header-abs">
        <i class="fas fa-chevron-left"></i>
      </div>
    </router-link>
    <div class="header-fixed" v-show="!show" :style="opacitySty">
      <router-link :to="{name: 'Home'}" tag="div" class="header-back">
        <div>
          <i class="fas fa-chevron-left"></i>
        </div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: function () {
    return {
      show: true,
      opacitySty: {opacity: 0}
    };
  },
  activated () { // 当页面加载后，就给窗口绑定事件滚轮事件
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated () {// deactivated在离开页面时候执行。给全局页面解绑，一旦离开这个页面就解除绑定。
    // 上面绑定的是全局事件，也就是在任何一个页面滚动都会触发这个事件
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var top = document.documentElement.scrollTop;
      if (top > 60) {// 渐变显示上方横栏
        if (top <= 140) {
          var op = top/140; // 按照向下滑动高度增加不透明度
          this.opacitySty.opacity = op;
        }
        this.show = false;
      }else {// 显示后退按钮
        this.show = true;
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header-abs
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background-color: rgb(0, 0, 0, 0.8);
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  .header-fixed
    background-color: #00bcd4;
    color: white;
    font-size: 0.35rem;
    line-height: 0.8rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    .header-back
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;


</style>
