<template>
  <div class="hidden-sm-and-down">
    <router-link to="/login">Login</router-link>
    <el-dropdown>
      <span class="el-dropdown-link">欢迎 , {{ username }}
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
          <router-link to="/login">退出</router-link>
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
      isLogin: true,
      username: '汉娜'
    }
  },
  created () {
    // let info = this.$local.fetch('evaluate')
    // this.$store.commit('setIsLogin', info.login)
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
