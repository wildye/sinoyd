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
    loginDetection: function () {
      let localInfo = localStorage.getItem('info') // 获取本地数据
      if (localInfo) {
        let info = JSON.parse(localInfo) // 字符转对象格式

        this.$store.commit('setToken', info.token) // 设置 Token
        // 刷新 token 请求
        this.$api.post('refresh-token', null, result => {
          info.token = result.headers.authorization // 获取新的 token
          this.$store.commit('setUserInfo', info) // 更新用户状态信息
          localStorage.setItem('info', JSON.stringify(info)) // 更新本地信息
          this.$store.commit('setIsLogin', true) // 设置登录状态
        }, error => {
          // token 过期处理
          if (error.status === 401) {
            localStorage.setItem('info', '') // 清空本地信息
            this.$store.commit('setUserInfo', {}) // 清空用户状态信息
            this.$store.commit('setIsLogin', false) // 设置登录状态
          }
        })
      }
    }
  }
}
</script>

<style lang="less">

  // Side Width
  @sideW: 50vw;
  // Nav Height
  @navH: .5rem;

  // 页面容器
  .wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
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

  // 遮罩层
  .shade {
    display: block;
    position: fixed;
    top: @navH;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
  }

  // Element Tag
  .el-aside {
    position: absolute;
    left: -@sideW;

    width: @sideW !important;
    height: 100%;

    transition: left .5s ease 0s;
    &.show {
      left: 0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    }
  }

  .el-header {
    margin-bottom: 10px;
    padding: 0;

    width: 100vw;
    height: @navH !important;

    line-height: @navH;

    background: #FFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    overflow: hidden;
  }

  .el-main {
    padding: 0;
    width: 100vw;
  }
</style>
