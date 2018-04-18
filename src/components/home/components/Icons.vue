<template>
  <div id="icons">
    <swiper>
      <swiper-slide v-for="page in pages">
        <div class="icon text-center" v-for="elem in page" :key="elem.id">
          <a :href="elem.link">
            <div class="icon-icon" :class="elem.class"></div>
            <p class="icon-words">{{elem.text}}</p>
          </a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      icons: [
        {id: 1, class: "", text: "签证-wifi", link: "#"},
        {id: 2, class: "abroad", text: "出境游", link: "#"},
        {id: 3, class: "oneday", text: "一日游", link: "#"},
        {id: 4, class: "food", text: "美食林", link: "#"},
        {id: 5, class: "transport", text: "汽车票", link: "#"},
        {id: 6, class: "internal", text: "国内游", link: "#"},
        {id: 7, class: "superbus", text: "超级巴士", link: "#"},
        {id: 8, class: "plan", text: "攻略", link: "#"},
      ],
    };
  },
  computed: {
    pages: function(){
      var pages = [];
      for (var i=0; i<this.icons.length;i++){
        var page = Math.floor((i/8));
        if(!pages[page]){
          pages[page]=[];
        }
        pages[page].push(this.icons[i]);
      }
      return pages;
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'
#icons
  width: 100%;
  padding-bottom: 50%;
  height: 0px;
  .icon
    display: inline-block;
    width: 25%;
    position: relative;
    height: 0px;
    padding-bottom: 25%;
    .icon-words
      width: 100%;
      display: block;
      padding-top: 10px;
      text-align: center;
      ellipsis()
    .icon-icon
      width: 33px;
      height: 33px;
      display: inline-block;
      background-image: url(http://s.qunarzz.com/touch_home/images/entrances.png);
      background-size: 374px 130px;
      background-position: -35px -12px;
      background-repeat: no-repeat;
    .abroad
      background-position: -124px -12px;
    .oneday
      background-position: -212px -12px;
    .food
      background-position: -300px -79px;
    .transport
      background-position: -35px -79px;
    .internal
      background-position: -124px -79px;
    .superbus
      background-position: -212px -79px;
    .plan
      background-position: -300px -12;
</style>
