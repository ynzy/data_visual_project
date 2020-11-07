import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import datav from 'ynzy_datav_libs'
import { Test, Test2 } from 'ynzy_datav_libs'
// console.log(datav)
createApp(App)
  .use(store)
  // .use(datav)
  .use(Test)
  .use(Test2)
  .use(router)
  .mount('#app')
