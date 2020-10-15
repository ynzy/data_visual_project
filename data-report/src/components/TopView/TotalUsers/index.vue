<!-- 累计用户数 -->
<template>
  <div>
    <CommonCard title="累计用户数" :value="userToday">
      <template>
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">{{ userGrowthLastDay }}</span>
          <div class="increase"></div>
          <span class="dod-change">月同比</span>
          <span class="emphasis">{{ userGrowthLastMonth }}</span>
          <div class="decrease"></div>
        </div>
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
      return {
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            name: '上月平台用户数',
            type: 'bar',
            stack: '总量', // 把相同系列数据或者图表合并成一个图表
            data: [this.userLastMonth],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            name: '今日平台交互数',
            type: 'bar',
            stack: '总量',
            data: [this.userTodayNumber],
            barWidth: 10,
            itemStyle: {
              color: '#eee'
            }
          },
          {
            // 自定义绘图
            type: 'custom',
            stack: '总量',
            data: [this.userLastMonth],
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0]) //获取数据坐标点
              return {
                type: 'group', // 分组管理图形
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // svg里path里字符串最长的d
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover' // 定义缩放比例，相当于背景图覆盖
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z', // svg里path里的d
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: 'red'
                    }
                  }
                ]
              }
            }
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      }
    }
  },
  mounted() {},
  components: {}
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;

  .dod-change {
    margin-left: 10px;
  }
}
</style>
