<template>
  <div class="nav-top">
    <div class="fl">
      <i v-if="$store.state.isWebApp" class="el-icon-menu" @click="showSideBar"></i>
      <!--<router-link to="/Apis">Apis</router-link>-->
    </div>
    <h1>
      <slot name="title"></slot>
    </h1>
    <div class="fr">
      <Explain/>
      <UserInfo/>
    </div>
  </div>
</template>

<script>
import Explain from './Explain'
import UserInfo from './UserInfo'
export default {
  name: 'NavTop',
  components: {
    Explain,
    UserInfo
  },
  data () {
    return {
    }
  },
  methods: {
    showSideBar: function () {
      this.$store.commit('toggleSidebar')
    }
  }
}
</script>

<style scoped lang="less">
  .nav-top {
    font-size: 14px;
  }
  .el-icon-menu {
    color: #66B1FF;
    cursor: pointer;
  }
  .nav-top {
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
  }
  .title {
    display: inline-block;
  }
  h1 {
    display: inline-block;
    margin: 0;
    font-size: inherit;
  }
</style>
