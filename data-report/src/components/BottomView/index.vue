<!--  -->
<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{ userCount | format }}</div>
                <v-chart :options="searchUserOptions" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{ searchCount | format }}</div>
                <v-chart :options="searchNumberOptions" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="rank" label="排名" width="180"></el-table-column>
                <el-table-column prop="keyword" label="关键词" width="180"></el-table-column>
                <el-table-column prop="count" label="总搜索量"></el-table-column>
                <el-table-column prop="users" label="搜索用户数"></el-table-column>
                <el-table-column prop="range" label="点击率"></el-table-column>
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group @change="onCategoryChange" v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'
const colors = ['#8d7fec', '#5085f2', '#f8726b', '#e7e702', '#78f283', '#4bc1fc']

export default {
  mixins: [commonDataMixin],
  data() {
    return {
      searchUserOptions: {},
      searchNumberOptions: {},
      tableData: [],
      totalData: [],
      total: 0,
      pageSize: 4,
      userCount: 0,
      searchCount: 0,
      radioSelect: '品类',
      categoryOptions: {}
    }
  },
  watch: {
    wordCloud() {
      const totalData = []
      this.wordCloud.forEach((item, index) => {
        totalData.push({
          id: index + 1,
          rank: index + 1,
          keyword: item.word,
          count: item.count,
          users: item.user,
          range: `${((item.user / item.count) * 100).toFixed(2)}%`
        })
      })
      // 分页
      this.totalData = totalData
      this.total = this.totalData.length
      this.renderTable(1)
      // 计算总数
      this.userCount = totalData.reduce((sum, n) => n.users + sum, 0)
      this.searchCount = totalData.reduce((sum, n) => n.count + sum, 0)
      // 渲染图表数据
      this.renderLineChart()
    },
    category1() {
      this.renderPieChart()
    }
  },
  mounted() {},
  methods: {
    // 渲染线图
    renderLineChart() {
      const createOption = key => {
        const data = []
        const axis = []
        this.wordCloud.forEach(item => data.push(item[key]))
        this.wordCloud.forEach(item => axis.push(item.word))
        return {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: axis
          },
          yAxis: {
            show: false
          },
          tooltip: {},
          series: [
            {
              type: 'line',
              data,
              areaStyle: {
                color: 'rgba(95,187,255,.5)'
              },
              lineStyle: {
                color: 'rgb(95,187,255)'
              },
              itemStyle: {
                opacity: 0
              },
              smooth: true
            }
          ],
          grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }
        }
      }
      this.searchUserOptions = createOption('user')
      this.searchNumberOptions = createOption('count')
    },
    // 分页方法
    renderTable(page) {
      this.tableData = this.totalData.slice(
        (page - 1) * this.pageSize,
        (page - 1) * this.pageSize + this.pageSize
      )
    },
    onCategoryChange(type) {
      console.log(type)
      this.radioSelect = type
      this.renderPieChart()
    },
    // 渲染饼图
    renderPieChart() {
      if (!this.category1.data1 || !this.category2.data1) {
        return
      }
      let data
      let axis
      let total = 0
      if (this.radioSelect == '品类') {
        data = this.category1.data1
        axis = this.category1.axisX
        total = data.reduce((sum, n) => sum + n, 0)
      } else {
        data = this.category2.data1
        axis = this.category2.axisX
        total = data.reduce((sum, n) => sum + n, 0)
      }
      const chartData = []
      data.forEach((item, index) => {
        const percent = `${((item / total) * 100).toFixed(2)}%`
        chartData.push({
          legendname: axis[index],
          value: item,
          percent,
          itemStyle: {
            color: colors[index % 6]
          },
          name: `${axis[index]} | ${percent}`
        })
      })
      this.categoryOptions = {
        title: [
          {
            text: `${this.radioSelect}分布`,
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: total,
            x: '34.5%',
            y: '42.5%',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            },
            textAlign: 'center'
          }
        ],
        series: [
          {
            name: `${this.radioSelect}分布`,
            type: 'pie',
            data: chartData,
            //定制饼图label
            label: {
              normal: {
                show: true,
                position: 'outtor',
                formatter: params => {
                  return `${params.data.legendname} | ${params.data.percent}`
                }
              }
            },
            center: ['35%', '50%'], // 改变圆心点位置
            radius: ['45%', '60%'], // 半径，1、内半径 2、外半径
            // 定制label的两条线段
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true
              }
            },
            clockwise: false, //是否顺时针排列
            // 调整间隔
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ],
        // 图例组件
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: params => {
            const str =
              params.seriesName +
              '<br />' +
              params.marker +
              params.data.legendname +
              '<br />' +
              '数量：' +
              params.data.value +
              '<br />' +
              '占比：' +
              params.data.percent +
              '%'
            return str
          }
        }
      }
    },
    onPageChange(page) {
      this.renderTable(page)
    }
  },
  created() {
    this.renderPieChart()
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;

  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding-right: 10px;
    }

    &:last-child {
      padding-left: 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
      height: 60px;
      font-size: 14px;
      font-weight: bold;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;

      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }

    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            font-size: 14px;
            color: #999;
          }

          .chart-data {
            font-size: 22px;
            font-weight: bold;
            color: #333;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
      }
      .el-pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
      }
    }
  }
}
</style>
