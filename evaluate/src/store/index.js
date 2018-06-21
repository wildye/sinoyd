import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    login: 0
  },
  mutations: {
    setToken (state, val) {
      state.token = val
    },
    delToken (state) {
      state.token = ''
    },
    setLogin (state, val) {
      state.login = val
    },
    delLogin (state) {
      state.login = 0
    }
  }
})
