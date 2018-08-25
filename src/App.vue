<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body{
    width: 100%;
    height: 100%;
    font-family: PingFangSC-Regular, Helvetica, Tahoma, Arial, \5b8b\4f53, sans-serif;
    list-style: none;
    font-size: 14px;
    min-width: 1200px;
    overflow: auto;

  }


</style>
