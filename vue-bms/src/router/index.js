import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/view/login';
import Index from '@/view/index';





import HomePage from '@/view/homePage/homePage';
import Proclamation from '@/view/proclamation/proclamation';
import CompanyStatistics from '@/view/statistics/companyStatistics'
import PersonalStatistics from '@/view/statistics/personalStatistics'

import BusinessManage from '@/view/businessManage/businessManage';
import BusinessManageAdd from '@/view/businessManage/businessManageAdd';
import User from '@/view/user/user';
import Dept from '@/view/dept/dept';
import Role from '@/view/role/role';
import Privilege from '@/view/privilege/privilege';

import HelloWorld from '@/components/HelloWorld';
import Indexbf from '@/view/indexbf';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/index',
      name: 'Index',
      component:Index,
      children:[
        {
          path:'/',
          redirect: '/index/HomePage'
        },
        {
          path:'HomePage',
          component:HomePage
        },
        {
          path:'Proclamation',
          component:Proclamation
        },
        {
          path:'CompanyStatistics',
          component:CompanyStatistics
        },
        {
          path:'PersonalStatistics',
          component:PersonalStatistics
        },
        {
          path:'BusinessManage',
          component:BusinessManage,
          children:[
            {
              path:':BusinessManageAdd',
              component:BusinessManageAdd
            },
          ]
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
        },
        {
          path:'privilege',
          component:Privilege
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/indexbf',
      name: 'Indexbf',
      component:Indexbf
    },
  ]
})
