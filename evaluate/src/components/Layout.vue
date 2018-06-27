<template>
  <el-container class="wrap">
    <!-- aside 侧栏 -->
    <el-aside
      v-if="$store.state.isWebApp"
      :class="{ show: $store.state.showSideBar }">
      <SideBar/>
    </el-aside>
    <el-container
      :class="{ show: $store.state.showSideBar, main: 1 }">
      <!-- nav-top 导航 -->
      <el-header>
        <NavBar>
          <slot slot="left" name="left"></slot>
          <slot slot="title" name="title"></slot>
          <slot slot="right" name="right"></slot>
        </NavBar>
      </el-header>
      <el-main>
        <!-- content 内容 -->
        <slot name="content"></slot>
        <div
          v-if="$store.state.showSideBar"
          class="shade"
          @click="$store.commit('toggleSideBar')">
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from './NavBar'
import SideBar from './SideBar'
export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar
  },
  created () {
    this.loginDetection()
  },
  methods: {
    // todo: 登录检测
    loginDetection () {
      let localInfo = localStorage.getItem('info') // 获取本地数据
      if (localInfo) {
        let info = JSON.parse(localInfo) // 字符转对象格式
        this.$store.commit('setToken', info.token) // 设置 Token

        // 刷新 token 请求
        this.$api.post('refresh-token', null, result => {
          info.token = result.headers.authorization
          this.record(info)
        }, error => {
          // token 过期处理
          if (error.status === 401) this.logout()
        })
      }
    },
    record (info) {
      this.$store.commit('setUserInfo', info) // 更新用户状态信息
      this.$store.commit('setLoginStatus', true) // 设置登录状态
      localStorage.setItem('info', JSON.stringify(info)) // 更新本地信息
    },
    logout () {
      localStorage.setItem('info', '') // 清空本地信息
      this.$store.commit('setUserInfo', {}) // 清空用户状态信息
      this.$store.commit('setLoginStatus', false) // 设置登录状态
    }
  }
}
</script>

<style lang="less">

  // Side Width
  @sideW: 30vw;
  // Nav Height
  @navH: .5rem;

  // 页面容器
  .wrap {
    position: relative;
    height: 100%;
    &.show {
      overflow: hidden;
    }
  }

  // 主体内容
  .main {
    position: absolute;
    left: 0;

    transition: left .5s ease 0s;
    &.show {
      left: @sideW;
    }
  }

  // Element Tag
  .el-aside {
    position: fixed;
    left: -@sideW;

    width: @sideW !important;
    height: 100vh;

    transition: left .5s ease 0s;
    z-index: 1;
    &.show {
      left: 0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    }
  }

  // 遮罩层
  .shade {
    display: block;
    position: fixed;
    top: @navH;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .2);
    z-index: 1;
  }

  .el-header {
    position: fixed;
    top: 0;

    padding: 0;

    width: 100%;
    height: @navH !important;

    line-height: @navH;

    background: #FFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);

    z-index: 1;
  }

  .el-main {
    padding: @navH 0 0;
    width: 100vw;
    box-sizing: border-box;
  }
</style>
