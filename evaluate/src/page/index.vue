<template>
  <el-container>
    <el-aside class="hidden-sm-and-up">
      <NavAside/>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <NavTop/>
      </el-header>
      <el-main>
        <h1>dasasdsda</h1>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavTop from '../components/NavTop'
import NavAside from '../components/NavAside'
export default {
  name: 'index',
  components: {
    NavTop,
    NavAside
  },
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="less">
  .el-container {
    background-color: #F5F6F7;
  }
  .el-header {
    padding: 0;
    line-height: 50px;
    background: #FFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    margin-bottom: 4px;
  }
  .el-aside {
    width: 200px;
    background-color: #D3DCE6;
    display: none;
  }
  .el-main {
    padding: 0;
  }
  .el-container {
    height: 100%;
  }
</style>
