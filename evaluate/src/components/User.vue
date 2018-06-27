<template>
  <div v-if="!$store.state.isWebApp">
    <router-link v-if="!$store.state.loginStatus" to="/login">登录</router-link>
    <el-dropdown v-if="$store.state.loginStatus">
      <span class="el-dropdown-link">欢迎 , {{ this.$store.state.userInfo.userName }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/survey">继续答卷</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/">问卷列表</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/port">Api Test</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <a @click="logout">退出</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  methods: {
    logout: function () {
      this.$api.delete('logout', null)
      this.$store.commit('setUserInfo', '')
      this.$store.commit('setLoginStatus', false)
      localStorage.setItem('info', '')
    }
  }
}
</script>

<style scoped>
  div {
    display: inline-block;
    font-size: 14px;
    padding: 0 .15rem;
  }
</style>
