<template>
  <div id="Recommend">
    <div class="title">
      <p class="title-text">周末去哪儿</p>
    </div>
    <ul class="item-list">
      <li class="item" v-for="elem in recomList" :key="elem.id">
        <div class="img-wrapper">
          <img :src="elem.url" alt="" class="item-img">
        </div>
        <div class="item-text">
          <p class="item-header">{{elem.header}}</p>
          <p class="item-desc">{{elem.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Weekend",
  data: function(){
    return {
      recomList: [
        {
          id: "001",
          url: "http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png",
          header: "亚龙湾热带天堂森林公园",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
        {
          id: "002",
          url: "http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png",
          header: "亚龙湾热带天堂森林公园",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
        {
          id: "003",
          url: "http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png",
          header: "亚龙湾热带天堂森林公园",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
        {
          id: "004",
          url: "http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png",
          header: "亚龙湾热带天堂森林公园",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
        {
          id: "005",
          url: "http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png",
          header: "亚龙湾热带天堂森林公园",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
      ],
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
      padding-bottom: 33.9%
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
