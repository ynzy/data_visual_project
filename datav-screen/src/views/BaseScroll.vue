<!-- baseScroll测试 -->
<template>
  <div style="width:500px;height:400px">
    <BaseScrollList :config="config" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: '',
  components: {},
  setup() {
    const state = reactive({
      config: {
        headerData: ['姓名', '年龄', '月薪'],
        headerStyle: [{ color: 'red' }, { width: '100px' }],
        headerFontSize: 24,
        headerColor: '#fff',
        rowColor: '#000',
        rowFontSize: 20,
        rowStyle: [{ color: 'red' }],
        rowBg: ['#a6a8a6', 'rgb(255,255,255)'],
        headerHeight: '40',
        headerIndex: true,
        data: [],
        aligns: ['center', 'center', 'center'],
        rowNum: 10
      }
    })
    const _data = []
    for (let i = 0; i < 10; i++) {
      _data.push(['同学' + (i + 1), Math.floor(Math.random() * 10 + 20), Math.floor(Math.random() * 10000 + 10000)])
    }
    state.config.data = _data
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped></style>
