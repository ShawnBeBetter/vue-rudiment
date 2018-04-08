import Vue from 'vue'
import Router from 'vue-router'
import VCharts from 'v-charts'
import HelloWorld from '@/components/Test/HelloWorld'
import HomeView from '../components/HomeView/HomeView'

Vue.use(Router, VCharts)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'patientManage',
      component: HomeView
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
