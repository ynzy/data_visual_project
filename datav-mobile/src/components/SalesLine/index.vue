<!-- 成交趋势图 -->
<template>
  <div class="sales-line">
    <div class="sales-line-inner">
      <vue-echarts :options="options"></vue-echarts>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: '',
  components: {},
  setup() {
    const options = ref({})
    const update = () => {
      const axis = ['00:00', '08:00', '16:00', '24:00']
      const data1 = [151, 532, 901, 344]
      const data2 = [320, 1732, 501, 334]
      const data3 = [900, 900, 900, 900]

      const _options = {
        title: {
          text: '分时访问&成交趋势图',
          textStyle: {
            color: '#fff'
          },
          left: 10,
          top: 10
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: axis,
          axisLabel: {
            color: 'rgba(255,255,255,.3)'
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'rgba(255,255,255,.3)'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          }
        },
        series: [
          {
            name: '访问量',
            type: 'line',
            smooth: true,
            itemStyle: {
              opacity: 0,
              color: 'rgb(0, 163, 233)'
            },
            data: data1
          },
          {
            name: '成交量',
            type: 'line',
            smooth: true,
            itemStyle: {
              opacity: 0,
              color: 'yellow'
            },
            data: data2
          },
          {
            name: 'KPI',
            type: 'line',
            smooth: true,
            itemStyle: {
              opacity: 0,
              color: 'red'
            },
            data: data3
          }
        ]
      }
      options.value = _options
    }
    onMounted(update)
    return {
      options
    }
  }
}
</script>
<style lang="scss" scoped>
.sales-line {
  position: absolute;
  top: 950px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 500px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-line-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
