<template>
  <div id="listAlapha">
    <ul>
      <li class="alpha" v-for="(elem, key) in cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "listAlpha",
  props: ['cities'],
  data: function(){
    return {

    };
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
