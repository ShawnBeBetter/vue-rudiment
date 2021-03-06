import Vue from 'vue'
import Router from 'vue-router'
import VCharts from 'v-charts'
import HelloWorld from '@/components/Test/HelloWorld'
import HomeView from '@/components/Views/HomeView/HomeView'
import PatientDetail from '@/components/Views/PatientDetail/PatientDetail'
import Setting from '@/components/Views/Setting/Setting'
import Invitation from '@/components/Views/Invitation/Invitation'
import CardRecord from '@/components/Views/CardRecord/CardRecord'
import Summary from '@/components/Views/Summary/Summary'

Vue.use(Router, VCharts)

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'patientManage',
      component: HomeView
    },
    {
      path: '/patient-detail/:id',
      name: 'PatientDetail',
      component: PatientDetail
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/invitation',
      name: 'Invitation',
      component: Invitation
    },
    {
      path: '/card-record',
      name: 'CardRecord',
      component: CardRecord
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    }
  ]
})

vueRouter.beforeEach((to, from, next) => {
  console.log('页面即将跳转')
  next()
})

export default vueRouter
