<template>
  <el-menu :default-openeds="['1','3']">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>管理员添加</template>
      <el-menu-item-group>
        <el-menu-item index="1-1">添加URL地址</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>考 评 信 息</template>
      <el-menu-item-group>
        <el-menu-item index="1-1">员工自评汇总信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>员 工 信 息</template>
      <el-menu-item-group>
        <el-menu-item index="1-1">员工基本信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'adminSideBar'
}
</script>

<style scoped  lang="less">
  .el-header, .el-footer {
    /*background-color: #000;*/
    /*color: #F7B90F;*/
    background-color: #fff;
    color: #000;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    /*border: 1px solid #000;*/
    height: 100%;
  }
  .el-aside li{
    color: #000;
    font-weight: bold;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }
  /*li.el.submenu{*/
    /*background-color: #000;*/
    /*color: #E3AA08;*/
  /*}*/
  .box{
    width: 100%;
    height: 100%;
  }

</style>
