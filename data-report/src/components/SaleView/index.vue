<!-- 年度销售额组件 -->
<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: 0 }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            class="el-menu-sales-view"
            :default-active="activeIndex"
            mode="horizontal"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              class="sales-view-date"
              type="daterange"
              size="small"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              unlink-panels
              v-model="date"
              :picker-options="pickerOptions"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOptions" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <!--              <div class="list-item-no" :class="+item.no <= 3 ? 'top-no' : ''">{{item.no}}</div>-->
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{ item.no }}</div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  mixins: [commonDataMixin],

  data() {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOptions: {}
    }
  },
  computed: {
    rankData() {
      return this.activeIndex == '1' ? this.orderRank : this.userRank
    }
  },
  watch: {
    orderFullYear() {
      this.render(this.orderFullYear, this.orderFullYearAxis, '年度销售额')
    }
  },
  methods: {
    render(data, axis, title) {
      this.chartOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 鼠标移入效果
            type: 'shadow'
          }
        },
        title: {
          text: title,
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: axis,
          axisTick: {
            alignWithLabel: true, // 短横线和图表中间对齐
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            //分割线
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            name: '销售额',
            type: 'bar',
            barWidth: '35%',
            data: data
          }
        ],
        color: ['#3398db'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      }
    },
    onMenuSelect(index) {
      this.activeIndex = index
      if (index == 1) {
        this.render(this.orderFullYear, this.orderFullYearAxis, '年度销售额')
      } else {
        this.render(this.userFullYear, this.userFullYearAxis, '年度用户访问量')
      }
    }
  },
  mounted() {},
  components: {}
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    .el-menu-sales-view {
      padding-left: 20px;
    }
    .el-menu-item {
      margin: 0 20px;
      height: 50px;
      line-height: 50px;
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      display: flex;
      align-items: center;
      height: 50px;
      .sales-view-date {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;

    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }

    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }

      .list-item-wrapper {
        margin-top: 15px;

        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;

          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;

            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }

          .list-item-name {
            margin-left: 10px;
            color: #333;
          }

          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
