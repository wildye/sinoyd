<template>
  <el-container class="wrap">
    <el-aside
      width="70vw"
      class="hidden-sm-and-up"
      :class="{show: showSideBar}">
      <SideBar/>
    </el-aside>
    <el-container class="content" :class="{show: showSideBar}">
      <el-header height="50px">
        <TopBar @fromNavTop="getShowSideBar"/>
      </el-header>
      <el-main>
        {{ showSideBar }}
        <div class="container">
          <el-card v-for="o in 10" :key="o" class="box-card">
            <router-link to="/survey">
              <div class="text item">{{'团队角色自我知觉问卷 ' + o }}</div>
            </router-link>
          </el-card>
        </div>
        <div class="shade" @click="showSideBar=false"></div>
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
    getShowSideBar: function (data) {
      this.showSideBar = data
      console.log(this.showSideBar)
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
    position: fixed;
    display: block;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: 10;
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
