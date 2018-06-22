<template>
  <el-container>
    <el-aside width="200px" class="hidden-sm-and-up">
      <NavAside/>
    </el-aside>
    <el-container>
      <el-header>
        <NavTop/>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavTop from '../components/NavTop'
import NavAside from '../components/NavAside'
export default {
  name: 'login',
  components: { NavTop, NavAside },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="less">
  .el-header, .el-footer {
    background-color: #B3C0D1;
  }

  .el-aside {
    background-color: #D3DCE6;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  .el-container {
    height: 100%;
  }
</style>
