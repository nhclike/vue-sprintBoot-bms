import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login'
import Index from '@/view/index'
import Indexbf from '@/view/indexbf'

import User from '@/view/user/user'
import Dept from '@/view/dept/dept'
import Role from '@/view/role/role'
import BusinessManage from '@/view/businessManage/businessManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/indexbf',
      name: 'Indexbf',
      component:Indexbf
    },
    {
      path: '/index',
      name: 'Index',
      component:Index,
      children:[
        {
          path:'BusinessManage',
          component:BusinessManage
        },
        {
          path:'user',
          component:User
        },
        {
          path:'dept',
          component:Dept
        },
        {
          path:'role',
          component:Role
        }
      ]
    }
  ]
})
