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
</style>
