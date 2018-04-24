<template>
  <div id="Search">
    <input class= "search-input" type="text" placeholder="输入城市名或者拼音名">
  </div>
</template>
<script>
export default {
  name: "Search",
  data: function(){
    return {

    };
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/variables.styl'
  #Search
    background-color: $bgColor;
    text-align: center;
    line-height: 0.86rem;
    padding: 0 0.1rem;
    .search-input
      width: 100%;
      border-radius: 0.06rem;
      height: 0.6rem;
      text-align: center;
      color: #666;
      box-sizing: border-box;
      padding: 0 0.1rem;
</style>
