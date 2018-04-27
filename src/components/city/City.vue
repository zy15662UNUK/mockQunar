<template>
  <div id="City">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :hotCities="hotCities" :cities="cities"></CityList>
    <CityListAlpha :cities="cities"></CityListAlpha>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Search from "./components/Search.vue"
import List from "./components/List.vue"
import ListAlapha from "./components/ListAlapha.vue"
import axios from 'axios'

export default {
  name: "City",
  data: function(){
    return {
      hotCities: [],
      cities: {},
    };
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
           .then(this.getCityInfoSucc)

    },
    getCityInfoSucc(res){
      var d = res.data;
      if(d.ret && d.data){
        this.hotCities = d.data.hotCities;
        this.cities = d.data.cities;
        console.log(this.cities);
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getCityInfo();
  },
  components: {
    CityHeader: Header,
    CitySearch: Search,
    CityList: List,
    CityListAlpha: ListAlapha,
  }
}
</script>
<style scoped>
</style>
