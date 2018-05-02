<template>
  <div id="detail">
    <detailBanner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    ></detailBanner>
    <detailHeader></detailHeader>
    <detailList :list="list"></detailList>
    <div style="height: 10rem;">
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import axios from 'axios'
export default {
  name: "Detail",
  data: function () {
    return {
      list: [],
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
    };
  },
  components: {
    "detailBanner": Banner,
    "detailHeader": Header,
    "detailList": List
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail.json', {params: {id: this.$route.params.id}}) // 发送请求时加上每个详情页面id
           .then(this.handleDetailInfo)// 也就是当时给路由url加上那个id
    },
    handleDetailInfo (res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.list = data.categoryList;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getDetailInfo();
  }
}
</script>
<style lang="stylus" scoped>
</style>
