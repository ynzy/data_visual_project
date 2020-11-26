import { onMounted, onUnmounted, reactive, toRefs } from 'vue'
import { getMobileData, } from '@/api'


export const mobileScreenData = () => {
  const state = reactive({
    loading: true,
    loadingText: '加载中',
    saleLine: {},
    salePie: [],
    salesBar: {},
    salesRadar: {},
    salesSun: []
  })
  let task = null;
  const update = () => {

    getMobileData().then(res => {
      console.log(res);
      state.saleLine = res.saleLine
      state.salePie = res.salePie
      state.salesBar = res.salesBar
      state.salesRadar = res.salesRadar
      state.salesSun = res.salesSun
      state.loading = false
    })
  }

  onMounted(() => {
    task = setInterval(() => {
      if (state.loadingText === '加载中...') {
        state.loadingText = '加载中'
      } else {
        state.loadingText += '.'
      }
    }, 1000);
    update()
  })
  onUnmounted(() => {
    task && clearInterval(task)
  })
  return {
    ...toRefs(state)
  }
}