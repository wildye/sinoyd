<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import intro from './data/intro.js'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'App',
  data () {
    return {
      lists: intro.lists
    }
  }
}
</script>

<style lang="less">
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    list-style: none;
  }
  #app {
    width: inherit;
    height: inherit;
  }
  h1 {
    font-weight: 300;
  }
  .text-center {
    text-align: center;
  }
</style>
