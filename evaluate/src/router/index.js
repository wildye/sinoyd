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
      path: '/',
      alias: '/index',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/survey',
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
      path: '*',
      redirect: '/'
    }
  ]
})
