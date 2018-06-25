<template>
  <div v-if="!$store.state.isWebApp">
    <router-link v-if="!$store.state.isLogin" to="/login">Login</router-link>
    <el-dropdown v-if="$store.state.isLogin">
      <span class="el-dropdown-link">欢迎 , {{ info.userName }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/survey">继续答卷</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/survey">问卷列表</router-link>
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
  data () {
    return {
      info: this.$store.state.userInfo
    }
  },
  created () {
    console.log(this.info.userName)
  },
  methods: {
    logout: function () {
      this.$api.delete('logout', null)
      this.$store.commit('setUserInfo', '')
      this.$store.commit('setIsLogin', false)
      localStorage.setItem('info', '')
    }
  }
}
</script>

<style scoped>
  div {
    display: inline-block;
    font-size: 14px;
  }
  .el-dropdown {
    line-height: normal;
  }
</style>
