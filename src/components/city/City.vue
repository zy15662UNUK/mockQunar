<template>
  <div id="City">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityListAlpha></CityListAlpha>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Search from "./components/Search.vue"
import List from "./components/List.vue"
import ListAlapha from "./components/ListAlapha.vue"
export default {
  name: "City",
  data: function(){
    return {

    };
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
