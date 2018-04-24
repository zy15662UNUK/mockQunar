<template>
  <div id="Recommend">
    <div class="title">
      <p class="title-text">热销推荐</p>
    </div>
    <ul class="item-list">
      <li class="item" v-for="elem in recomList" :key="elem.id">
        <img :src="elem.url" alt="" class="item-img">
        <div class="item-text">
          <p class="item-header">{{elem.header}}</p>
          <p class="item-desc">{{elem.desc}}</p>
          <button type="button" class="item-detail">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  data: function(){
    return {
      recomList: [
        {
          id: "001",
          url: "http://img1.qunarzz.com/sight/p0/1703/57/5794796148ac680da3.img.png_200x200_0cf91d82.png",
          header: "乐华城•乐华欢乐世界",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
        {
          id: "002",
          url: "http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_200x200_ead93bcd.jpg",
          header: "宋城千古情",
          desc: "杭州宋城的灵魂，世界三大名秀"
        },
        {
          id: "003",
          url: "http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png",
          header: "亚龙湾热带天堂森林公园",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
        {
          id: "004",
          url: "http://img1.qunarzz.com/sight/p0/1801/4e/4ee5653be58dcb1a3.water.jpg_200x200_d169685d.jpg",
          header: "香港迪士尼乐园",
          desc: "浪漫陕西首站，浪漫的度假村"
        },
        {
          id: "005",
          url: "http://img1.qunarzz.com/sight/p0/1507/9e/7b5e0a44cb0310280b1aeb2a8dd94de8.water.jpg_200x200_3c429960.jpg",
          header: "长隆国际大马戏剧院",
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
