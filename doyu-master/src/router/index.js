import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import register from '@/pages/register'
import ShowView from '@/components/greenroom/showView'
import Gift from '@/components/greenroom/gift'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/showView',
      name: 'showView',
      component: ShowView,
      children: [
        {
          path: '/gift',
          name: 'gift',
          component: Gift
        }
      ]
    }
  ]
})
