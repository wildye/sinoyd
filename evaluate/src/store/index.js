import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    isLogin: false
  },
  mutations: {
    setToken (state, val) {
      state.token = val
    },
    delToken (state) {
      state.token = ''
    }
  }
})
