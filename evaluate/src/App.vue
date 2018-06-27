<template>
  <div id="app" :class="{ show: $store.state.showSideBar }">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      deviceWidth: null
    }
  },
  created () {
    this.deviceWidth = document.documentElement.clientWidth
    this.$store.commit('setIsWebApp', this.isWebApp)
    // 设置 body 字体, 用于 rem 布局
    document.documentElement.style.fontSize = this.isWebApp ? this.deviceWidth / 4.8 + 'px' : 100 + 'px'
  },
  computed: {
    isWebApp () {
      return this.deviceWidth <= 480
    }
  }
}
</script>

<style lang="less">
  html, body,
  #app{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Microsoft YaHei', '微软雅黑', 'Helvetica';
    background: #f8f8f8;
    font-size: .12rem;
    overflow-x: hidden;
  }
  #app.show {
    overflow: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 300;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    &:hover {
      color: inherit;
    }
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
  .v-modal,
  .el-slider__button-wrapper {
    z-index: auto !important;
  }
</style>
