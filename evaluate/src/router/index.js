import Vue from 'vue'
import Router from 'vue-router'

// page module
import Index from '../page/'
import Login from '../page/login'
import Survey from '../page/survey'
import Summary from '../page/summary'

import Apis from '../components/Apis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    },
    {
      path: '/port',
      name: 'api',
      component: Apis
    }
  ]
})
