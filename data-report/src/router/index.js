import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/bmap',
		name: 'BMap',
		component: () => import('@/views/BMap')
	},
	{
		path: '/bmap2',
		name: 'BMap2',
		component: () => import('@/views/BMap2')
	},
	{
		path: '/Liquidfill',
		name: 'Liquidfill',
		component: () => import('@/views/Liquidfill')
	},
	{
		path: '/WordCloud',
		name: 'WordCloud',
		component: () => import('@/views/WordCloud')
	},
]

const router = new VueRouter({
	routes
})

export default router
