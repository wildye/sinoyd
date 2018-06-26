<template>
  <div class="aside">
    <p>
      <img src="/static/image/user-icon.svg" alt="">
      <span>Hannah</span>
    </p>
    <router-link to="/" tag="p" class="active">
      <i class="el-icon-document"> 问卷列表</i>
    </router-link>
    <router-link to="/survey/strUrl" tag="p">
      <i class="el-icon-edit-outline"> 继续答题</i>
    </router-link>
    <router-link to="/port" tag="p">
      <i class="el-icon-setting"> Api Test</i>
    </router-link>
    <a class="logout" @click="logout">
      <i class="el-icon-close"> 退出</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavSide',
  methods: {
    logout: function () {
      this.$store.commit('toggleSidebar')
      this.$store.commit('setUserInfo', '')
      this.$store.commit('setIsLogin', false)
      this.$api.delete('logout', null)
    }
  }
}
</script>

<style scoped lang="less">
  .aside {
    padding-top: 30px;
    height: 100%;

    font-size: 15px;
    text-align: center;

    color: #ccc;
    background: #2C2F40;
    box-sizing: border-box;
  }
  .logout {
    display: inline-block;
    position: absolute;
    left: 30%;
    bottom: 50px;
    padding: 5px 10px;
    color: #999;
    border: 1px solid #666;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }
  a {
    color: inherit;
  }
  p {
    margin: 0;
    padding: 12px 0;
    &.active {
      color: #fff;
      background: #66B1FF;
    }
  }
</style>
