import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.scss'
import './plugins/element.js'
import './plugins/vcharts'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts
Vue.component('v-chart',VueECharts)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
