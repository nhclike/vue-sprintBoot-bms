import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/view/login';
import Index from '@/view/index';





import HomePage from '@/view/homePage/homePage';
import CorporateStatistics from '@/view/statistics/corporateStatistics'
import IndividualStatistics from '@/view/statistics/individualStatistics'
import BusinessManage from '@/view/businessManage/businessManage';
import BusinessManageForm from '@/view/businessManage/businessManageForm';
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
          path:'CorporateStatistics',
          component:CorporateStatistics
        },
        {
          path:'IndividualStatistics',
          component:IndividualStatistics
        },
        {
          path:'BusinessManage',
          component:BusinessManage,
          children:[
            {
              path:':BusinessManageForm',
              component:BusinessManageForm
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
