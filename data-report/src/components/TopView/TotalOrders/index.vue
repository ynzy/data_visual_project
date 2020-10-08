<!-- 订单总额 -->
<template>
<div>
  <CommonCard title="累计订单量" value="3,324,073">
    <template>
      <v-chart :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
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
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: 'category', // 分类
          show: false,
          boundaryGap: false // 坐标轴两旁留白
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            // 区域样式
            color: 'purple'
          },
          lineStyle: {
            // 线的样式
            width: 0
          },
          itemStyle: {
            // 点的样式
            opacity: 0
          },
          smooth: true // 是否平顺
        }],
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }
      }
    }
  },
  mounted() {

  },
  components: {}
}
</script>
