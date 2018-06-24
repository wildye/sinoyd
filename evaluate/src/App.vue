<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      lists: [
        {
          id: 1,
          username: 'zhenghao',
          password: 'zhenghao'
        },
        {
          id: 2,
          username: 'liziheng',
          password: 'liziheng'
        },
        {
          id: 3,
          username: 'yeye',
          password: 'yeye'
        }
      ]
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
