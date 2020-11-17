import { createRouter, createWebHistory } from 'vue-router'
import demo from '../views/demo.vue'

const routes = [
  {
    path: '/',
    name: '',
    // component: demo
    redirect: '/baseScroll'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/baseScroll',
    name: 'BaseScroll',
    component: () => import(/* webpackChunkName: "BaseScroll" */ '../views/BaseScroll.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
