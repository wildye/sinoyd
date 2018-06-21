<template>
  <div class="login">
    <router-link class="login-text" to="/login">点击进入员工答题问卷</router-link>
    <router-link class="link1" to="/Apis">API测试</router-link>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // msg: '点击进入答题评分系统'
    }
  }
}
</script>

<style scoped lang="less">
  .login{
    position: relative;

    width: 100%;
    height: 100%;

    background: url(/static/image/001.jpg) no-repeat fixed;
    background-size: contain;

    opacity: .7;
  }
  .login-text{
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;

    margin: auto;
    width: 620px;

    font-size: 60px;
    font-family: cursive;
    text-decoration: none;

    color: white;
  }
</style>
