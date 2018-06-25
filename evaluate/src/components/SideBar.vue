<template>
  <div class="aside" style="text-align: center">
    <h1>
      <img src="/static/image/user-icon.svg" alt="">
    </h1>
    <span>欢迎，{{ $store.state.userInfo.userName }}</span>
    <router-link to="/survey">
      <i class="el-icon-document"> 继续答卷</i>
    </router-link>
    <router-link to="/">
      <i class="el-icon-document"> 问卷列表</i>
    </router-link>
    <router-link to="/port">
      <i class="el-icon-news"> Api Test</i>
    </router-link>
    <a @click="logout">
      <i class="el-icon-news"> 退出</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavSide',
  methods: {
    logout: function () {
      this.sendLogout()
      this.$store.commit('switchSidebar')
      this.$store.commit('setIsLogin', false)
      this.$router.push('/login')
    },
    sendLogout: function () {
      this.$api.delete('logout', null)
      this.$store.commit('setToken', '')
      localStorage.setItem('token', '')
    }
  }
}
</script>

<style scoped>
  .el-icon-document,
  .el-icon-news {
    display: block;
    line-height: 30px;
    color: white;
  }
</style>
