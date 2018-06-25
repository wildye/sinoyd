<template>
  <div class="nav-top">
    <div class="fl">
      <i v-if="$store.state.isWebApp" class="el-icon-menu" @click="showSideBar"></i>
    </div>
    <h1 class="title">问卷列表</h1>
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
    font-size: 14px;
  }
  h1 {
    margin: 0;
  }
</style>
