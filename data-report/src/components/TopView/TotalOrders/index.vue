<!-- 订单总额 -->
<template>
  <div>
    <CommonCard title="累计订单量" :value="orderToday">
      <template>
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">{{ orderLastDay }}</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
import commonDataMixin from '../../../mixins/commonDataMixin'

export default {
  mixins: [commonCardMixin, commonDataMixin],

  data() {
    return {}
  },
  methods: {
    getOptions() {
      // 对图标展示开始显示是一个方格进行兼容，有数据才进行显示
      return this.orderTrend.length
        ? {
            xAxis: {
              type: 'category', // 分类
              show: false,
              boundaryGap: false // 坐标轴两旁留白
            },
            yAxis: {
              show: false
            },
            series: [
              {
                type: 'line',
                data: this.orderTrend,
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
              }
            ],
            grid: {
              top: 0,
              right: 0,
              left: 0,
              bottom: 0
            }
          }
        : null
    }
  },
  mounted() {},
  components: {}
}
</script>
