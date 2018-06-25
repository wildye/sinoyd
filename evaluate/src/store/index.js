import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // 是否为移动端（WebApp）
    isWebApp: false,

    // 显示侧栏
    showSidebar: this.isWebApp,

    // 是否已登录
    isLogin: false,

    // 登录信息
    userInfo: {
      id: '',
      userName: '',
      token: ''
    }
  },
  mutations: {
    setIsWebApp (state, val) {
      state.isWebApp = val
    },
    setIsLogin (state, val) {
      state.isLogin = val
    },
    toggleSidebar (state) {
      state.showSidebar = !state.showSidebar
    },
    setUserInfo (state, val) {
      state.userInfo = val
    },
    setToken (state, val) {
      state.userInfo.token = val
    }
  }
})
