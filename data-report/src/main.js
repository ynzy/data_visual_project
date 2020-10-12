import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

import './assets/css/index.scss'
Vue.config.productionTip = false

Vue.prototype.$bmap = window.BMapGL
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
