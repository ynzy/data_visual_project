import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style/reset.css'

import VueEcharts from '@/components/VueEcharts/index'

createApp(App)
  .use(router)
  .use(VueEcharts)
  .mount('#app')
