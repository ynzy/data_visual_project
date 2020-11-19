import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: '',
    // component: demo
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/rotatingEarthTest',
    name: 'RotatingEarthTest',
    component: () => import(/* webpackChunkName: "RotatingEarthTest" */ '../views/demo/RotatingEarthTest.vue')
  },
  {
    path: '/baseScroll',
    name: 'BaseScroll',
    component: () => import(/* webpackChunkName: "BaseScroll" */ '../views/demo/BaseScroll.vue')
  },
  {
    path: '/complexEcharts',
    name: 'ComplexEcharts',
    component: () => import(/* webpackChunkName: "ComplexEcharts" */ '../views/demo/ComplexEcharts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
