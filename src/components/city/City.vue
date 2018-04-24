<template>
  <div id="City">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Search from "./components/Search.vue"

export default {
  name: "City",
  data: function(){
    return {

    };
  },
  components: {
    CityHeader: Header,
    CitySearch: Search
  }
}
</script>
<style scoped>
</style>
