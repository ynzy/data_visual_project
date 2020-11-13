<!-- 设备统计组件 -->
<template>
  <div class="total-device">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// import 'echarts/lib/chart/bar'
export default {
  name: 'TotalDevice',
  components: {},
  setup() {
    const state = reactive({
      options: {
        xAxis: {
          data: ['a', 'b', 'c', 'd']
        },
        yAxis: {},
        series: [
          {
            name: 'sales',
            type: 'bar',
            data: [10, 15, 20, 25]
          }
        ]
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped>
.total-device {
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);
}
</style>
