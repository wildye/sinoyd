import Vue from 'vue'
import Router from 'vue-router'

// view
import home from '@/view/'
import login from '../view/login'
import survey from '../view/survey'
import summary from '../view/summary'
import apis from '../components/Apis'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/survey',
      alias: '/',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      // 问卷列表
      path: '/survey/:id',
      component: survey
    },
    {
      // 答卷页面
      path: '/survey/:id',
      component: survey
    },
    {
      path: '/summary',
      component: summary
    },
    {
      path: '/port',
      component: apis
    },
    {
      path: '/Apis',
      component: apis
    },
    {
      path: '*',
      redirect: '/survey'
    }
  ]
})
