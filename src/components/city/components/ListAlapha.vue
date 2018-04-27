<template>
  <div id="listAlapha">
    <ul>
      <li @click="handleClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          class="alpha"
          v-for="(elem, key) in cities"
          :key="key"
          :ref="key"
      >{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "listAlpha",
  props: ['cities'],
  data: function(){
    return {
      touch: false,
      startY: 0,//页面初始化时候cities数据还未传入，此时startY为0
      timer: null
    };
  },
  updated() {
    //当数据传入后，页面会更新，此时就可以计算A的距离了
    this.startY = this.$refs["A"][0].offsetTop;//计算A点到列表顶端距离
  },
  computed: {
    letters(){
      const letters = [];
      for (var i in this.cities){
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleClick(event) {
      var letter = event.target.innerText;
      this.bus.$emit("change",letter);
    },
    handleTouchStart() {
      this.touch = true;//当手指接触屏幕触发该事件，此时令tough=true确认手指接触
    },
    handleTouchMove(e) {
      // 下面是执行一个节流的操作。当手指做出移动的时候，延迟16ms执行，如果在这16ms内执行了其他动作
      // 那么清空原有动作，执行新动作。这样降低了handleTouchMove执行操作频率，提升性能
      if(this.timer){
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(()=>{
        if(this.touch){//当手指是接触的时候
          const touchY = e.touches[0].clientY - 100;//计算手指点到列表顶端距离，clientY只能给到页面顶端距离，需要减去搜索栏距离
          var index = Math.floor((touchY- this.startY)/23);//距离差/每个字母高度 取整等于第几个字母
          if (index >= 0 && index < this.letters.length){//当字母index有效时
            var letter = this.letters[index];//取出字母
            this.bus.$emit("change",letter);//发送字母给bus，滑动事件在目的上等同于点击，因此依旧是发送给‘change’事件
          }
        }
      }, 16);

    },
    handleTouchEnd() {
      this.touch = false;//当手指离开屏幕触发该事件，此时令tough=false确认手指离开
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/variables.styl'
  #listAlapha
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 1.78rem;
    bottom: 0;
    width: 0.4rem;
    font-size: 0.35rem;
    text-align: center;
    ul
      .alpha
        color: $bgColor;
        line-height: 0.5rem;
</style>
