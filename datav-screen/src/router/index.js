import { createRouter, createWebHistory } from 'vue-router'
import demo from '../views/demo.vue'

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
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
