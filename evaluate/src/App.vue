<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 判断是否为移动端访问
    if (document.documentElement.clientWidth < 480) {
      this.$store.commit('setIsWebApp', true)
    } else {
      this.$store.commit('setIsWebApp', false)
    }
  }
}
</script>

<style lang="less">
  html,
  body,
  #app{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    list-style: none;
    overflow: hidden;
  }
  h1 {
    font-weight: 300;
  }
  a {
    color: #66B1FF;
    text-decoration: none;
  }
  .text-center {
    text-align: center;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
</style>
