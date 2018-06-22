<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="24" :sm="14" :md="12" :lg="8">
      <h1 class="text-center">团队角色自我知觉<br />问卷调查</h1>
      <el-tabs v-model="activeName" stretch @tab-click="handleClick">
        <el-tab-pane label="员工登录" name="user">
          <LoginForm :loginRole = "activeName"/>
        </el-tab-pane>
        <el-tab-pane label="管理登录" name="admin">
          <LoginForm :loginRole = "activeName"/>
        </el-tab-pane>
      </el-tabs>
      <router-link to="/port">
        <el-button type="primary" style="margin-top: 15px">API Test</el-button>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'login',
  components: { LoginForm },
  data () {
    return {
      activeName: 'user'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="less">
  .el-row {
    height: 100%;
    background: url(/static/image/bg.jpg) no-repeat fixed;
    background-size:100% 100%;
  }
  .el-col {
    @media (max-width: 768px) {
      margin: 0 15px;
    }
  }
  .el-tabs {
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 3px rgba(0,0,0,.2);
    @media (max-width: 480px) {
      padding: 15px;
    }
  }
</style>
