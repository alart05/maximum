import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Success from '@/pages/Success'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main'
    },
    {
      path: '/success',
      component: Success,
      name: 'Success'
    },
  ]
})

export default routes;