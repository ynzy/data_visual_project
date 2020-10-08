<!-- 今日交易用户数 -->
<template>
<div>
  <CommonCard title="今日交易用户数" value="713,193">
    <template>
      <div id="today-users-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.70%</span>
    </template>
  </CommonCard>
</div>
</template>

<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  data() {
    return {}
  },
  methods: {},
  mounted() {
    const chartDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDom, 'light', {
      renderer: 'svg'
    })
    chart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 鼠标移入效果
          type: 'line'
        }
      },
      xAxis: {
        type: 'category', // 分类
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00'
        ],
        show: false
      },
      yAxis: {
        show: false
      },
      series: [{
        name: '直接访问',
        type: 'bar',
        data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
        barWidth: '60%'
      }],
      color: ['#3398DB'],
      grid: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }
    })
  },
  components: {}
}
</script>

<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
