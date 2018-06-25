<template>
  <el-container class="wrap">
    <el-aside
      v-if="$store.state.isWebApp"
      :class="{show: $store.state.showSidebar}">
      <SideBar/>
    </el-aside>
    <el-container
      :class="{content: 1, show: $store.state.showSidebar}">
      <el-header height="50px">
        <TopBar/>
      </el-header>
      <el-main>
        <div class="container">
          <el-card v-for="val in surveyList" :key="val.id" class="box-card">
            <router-link to="/survey">
              <div><span>id：</span>{{val.id }}</div>
              <div><span>问卷：</span>{{val.name }}</div>
              <div><span>说明：</span>{{val.desc }}</div>
              <div><span>分类：</span>{{val.show }}</div>
              <div><span>发布时间：</span>{{val.created_at }}</div>
              <div><span>最后更新：</span>{{val.updated_at }}</div>
            </router-link>
          </el-card>
        </div>
        <div
          v-if="$store.state.showSidebar"
          class="shade"
          @click="hideSideBar">
        </div>
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
      surveyList: []
    }
  },
  created () {
    this.loginDetection()
    this.getSurveyList()
  },
  methods: {
    // todo: 隐藏侧栏
    hideSideBar: function () {
      this.$store.commit('toggleSidebar')
    },
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
    },
    // todo: 获取列表
    getSurveyList: function () {
      this.$api.get('survey', null, result => {
        this.surveyList = result.data.data
        console.log(result)
        console.log(result.data)
        console.log(result.data.data)
      })
    }
  }
}
</script>

<style lang="less">

  // Page Layout
  @offset: 50vw;

  .wrap {
    position: relative;
    overflow: hidden;
  }

  .content {
    position: absolute;
    left: 0;
    transition: left .5s ease 0s;
    &.show {
      left: @offset;
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

  // Element Components
  .el-aside {
    position: absolute;
    left: -@offset;
    width: @offset !important;
    height: 100%;
    background: #66B1FF;
    z-index: 1;
    transition: left .5s ease 0s;
    &.show {
      left: 0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
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
  span {
    color: #000;
  }
</style>
