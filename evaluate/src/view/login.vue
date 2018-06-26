<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="24" :sm="14" :md="12" :lg="8">
      <h1 class="text-center">问卷调查</h1>
      <FormLogin/>
    </el-col>
  </el-row>
</template>

<script>
import FormLogin from '../components/FormLogin'
export default {
  name: 'login',
  components: {
    FormLogin
  }
}
</script>

<style scoped lang="less">
  body {
    background: #F5F6F7;
  }
  .el-row {
    height: 100%;
    background: url(/static/image/bg.jpg) no-repeat 50% 50%;
    background-size: cover;
  }
  .el-col {
    @media (max-width: 768px) {
      margin: 0 15px;
    }
  }
  h1 {
    font-size: .36rem;
    margin: .15rem;
  }
</style>
