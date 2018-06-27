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
    },

    // url 已生成随机串
    urlStr: [],
    urlStrIndex: 0
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
    },
    getUrlStr (state) {
      state.urlStrIndex++
    },
    addUrlStr (state, val) {
      state.urlStr = state.urlStr.concat(val)
    },
    delUrlStr (state, val) {
      let index = state.urlStr.indexOf(val)
      if (index >= 0) {
        state.urlStr.splice(index, 1)
      }
    }
  }
})
