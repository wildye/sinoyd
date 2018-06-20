<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import intro from './data/intro.js'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      lists: intro.lists
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
  @import "./style/style";
  html,body{
  padding: 0;
  margin: 0;
  list-style: none;
  height: 100%;
  width: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
