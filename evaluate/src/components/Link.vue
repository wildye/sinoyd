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
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(./../../static/image/001.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  background-attachment: fixed;
  opacity: .7;
}
.login-text{
  position: absolute;
  left: 0;
  right: 0;
  top: 200px;
  margin: auto;
  width: 620px;
  font-size: 60px;
  color: white;
  font-family: cursive;
  text-decoration: none;

}
</style>
