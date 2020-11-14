import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/symbo.js'
import datav from 'ynzy_datav_libs'
// import { Test, Test2 } from 'ynzy_datav_libs'

createApp(App)
  .use(router)
  .use(store)
  .use(datav)
  // .use(Test)
  .mount('#app')
