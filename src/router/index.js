import Vue from 'vue'
import Router from 'vue-router'
import EmpList from '@/components/EmpList'
import EmpAdd from '@/components/EmpAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/EmpList',
      name: 'EmpList',
      component: EmpList
    },
    {
      path: '/EmpAdd',
      name: 'EmpAdd',
      component: EmpAdd
    }
  ]
})
