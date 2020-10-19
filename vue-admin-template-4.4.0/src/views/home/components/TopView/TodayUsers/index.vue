<!-- 今日交易用户数 -->
<template>
  <div>
    <CommonCard title="今日交易用户数" :value="orderUser">
      <template>
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">{{ returnRate }}</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from "@/mixins/commonCardMixin";
import commonDataMixin from "@/mixins/commonDataMixin";

export default {
  mixins: [commonCardMixin, commonDataMixin],
  data() {
    return {};
  },
  methods: {
    getOptions() {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 鼠标移入效果
            type: "line"
          }
        },
        xAxis: {
          type: "category", // 分类
          data: this.orderUserTrendAxis,
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name: "用户实时交易量",
            type: "bar",
            data: this.orderUserTrend,
            barWidth: "60%"
          }
        ],
        color: ["#3398DB"],
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }
      };
    }
  },
  mounted() {},
  components: {}
};
</script>

<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
