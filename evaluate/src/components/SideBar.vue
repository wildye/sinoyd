<template>
  <div class="aside" style="text-align: center">
    <h1>
      <img src="/static/image/user-icon.svg" alt="">
    </h1>
    <span>welcome, Hannah</span>
    <router-link to="/survey">
      <i class="el-icon-document"> 继续答卷</i>
    </router-link>
    <router-link to="/survey">
      <i class="el-icon-document"> 问卷列表</i>
    </router-link>
    <router-link to="/port">
      <i class="el-icon-news"> Api Test</i>
    </router-link>
    <router-link to="/port">
      <i class="el-icon-news"> 退出</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavSide'
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
