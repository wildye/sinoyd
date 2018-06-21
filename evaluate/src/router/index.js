import Vue from 'vue'
import Router from 'vue-router'

// page module
import Link from '../components/Link'
import Login from '../components/Login'
import answer from '../components/answer'
import ApiTest from '../components/ApiTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Link',
      component: Link
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/answer',
      name: 'answer',
      component: answer
    },
    {
      path: '/apis',
      name: 'ApiTest',
      component: ApiTest
    }
  ]
})
