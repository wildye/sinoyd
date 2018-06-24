<template>
  <el-container class="wrap">
    <el-aside
      width="70vw"
      class="hidden-sm-and-up"
      :class="{show: $store.state.showSidebar}">
      <SideBar/>
    </el-aside>
    <el-container
      class="content"
      :class="{show: $store.state.showSidebar}">
      <el-header height="50px">
        <TopBar/>
      </el-header>
      <el-main>
        <div class="container">
          <el-card v-for="o in 5" :key="o" class="box-card">
            <router-link to="/survey">
              <div class="text item">{{'团队角色自我知觉问卷 ' + o }}</div>
            </router-link>
          </el-card>
        </div>
        <div
          class="shade"
          v-if="$store.state.showSidebar"
          @click="hideSideBar"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TopBar from '../components/NavTop'
import SideBar from '../components/SideBar'
export default {
  name: 'index',
  components: {
    TopBar,
    SideBar
  },
  data () {
    return {
      showSideBar: false,
      isLogin: true
    }
  },
  methods: {
    hideSideBar: function () {
      this.$store.commit('switchSidebar')
      console.log(this.$store.state.showSidebar)
    }
  }
}
</script>

<style lang="less">
  .wrap {
    position: relative;
    overflow: hidden;
  }
  .content {
    position: absolute;
    left: 0;
    transition: left .5s ease 0s;
    &.show {
      left: 70vw;
    }
  }
  .container {
    width: 100%;
    @media (min-width: 960px) {
      margin: 0 auto;
      width: 960px;
    }
  }
  .shade {
    display: block;
    position: fixed;
    top: 50px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
  }
  // 组件
  .el-aside {
    position: absolute;
    left: -71vw;
    width: 70vw;
    height: 100%;
    background: #66B1FF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    z-index: 1;
    transition: left .5s ease 0s;
    &.show {
      left: 0;
    }
  }
  .el-container {
    background-color: #F5F6F7;
  }
  .el-header {
    margin-bottom: 10px;
    padding: 0;

    width: 100vw;
    height: 50px !important;

    line-height: 50px;
    background: #FFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    overflow: hidden;
  }
  .el-main {
    padding: 0;
    width: 100vw;
  }
  .el-container {
    height: 100%;
  }
  .el-card {
    margin: 0 10px 10px;
  }
</style>
