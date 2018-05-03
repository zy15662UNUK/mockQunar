<template>
  <div id="app">
    <keep-alive exclude="Header">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a,
a:active,
a:hover{
  text-decoration: none;
  color: inherit;
}
</style>
