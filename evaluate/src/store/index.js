import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    isWebApp: null,

    // 显示侧栏
    showSideBar: false,

    // 登录状态
    loginStatus: false,

    // 登录信息
    userInfo: {
      id: null,
      userName: null,
      token: null
    }
  },
  mutations: {
    setIsWebApp (state, val) {
      state.isWebApp = val
    },
    toggleSideBar (state) {
      state.showSideBar = !state.showSideBar
    },
    setLoginStatus (state, val) {
      state.loginStatus = val
    },
    setUserInfo (state, val) {
      state.userInfo = val
    },
    setToken (state, val) {
      state.userInfo.token = val
    }
  }
})
