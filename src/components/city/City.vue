<template>
  <div id="City">
    <CityHeader></CityHeader>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: "City",
  data: function(){
    return {

    };
  },
  components: {
    CityHeader: Header
  }
}
</script>
<style scoped>
</style>
