<!--  -->
<template>
  <v-chart
    ref="echart"
    :options="options"
    @finished="finished"
    @click="handleClick"
  />
</template>

<script>
import 'echarts/extension/bmap/bmap'
import mapStyle from '../utils/mapStyle.json'
import { scatterData, geoCoordMap } from '../utils/scatterData'
/* const testPoint = [{
  name: '海门',
  value: [121.15, 31.89, 80]
}, {
  name: '南京',
  value: [118.78, 32.04, 100]
}] */

const convertData = function(data) {
  let res = []
  data.forEach(item => {
    const { name, value } = item
    const coord = geoCoordMap[name]
    res.push({
      name,
      value: [...coord, value]
    })
  })
  return res
}
// console.log(convertData(scatterData))

export default {
  components: {},
  data() {
    return {
      options: {
        title: {
          text: '外卖销售数据大盘',
          subtext: '销售趋势统计',
          sublink: 'https://www.baidu.com',
          left: 'center'
        },
        bmap: {
          key: 'FkCqbmKtfHsKPtnEjvhjFcg6pwlN03jO',
          center: [116.404, 39.915],
          zoom: 5,
          roam: true,
          mapStyle: { style: 'grayscale' }
        },
        tooltip: {},
        series: [
          {
            name: '销售额',
            type: 'scatter',
            coordinateSystem: 'bmap', // 坐标系统
            data: convertData(scatterData),
            encode: {
              value: 2 //定制value值
            },
            itemStyle: {
              color: 'purple'
            },
            symbolSize: function(val) {
              //点的大小
              return val[2] / 10
            },
            label: {
              show: false,
              position: 'right',
              formatter: function(v) {
                return `${v.data.name} - ${v.data.value[2]}`
              }
            },
            // 鼠标移入显示label
            emphasis: {
              label: {
                show: true
              }
            }
          },
          {
            name: 'Top 2',
            type: 'effectScatter', //波纹散点
            coordinateSystem: 'bmap', // 坐标系统
            data: convertData(
              scatterData.sort(function(a, b) {
                return b.value - a.value
              })
            ).slice(0, 10),
            encode: {
              value: 2 //定制value值
            },
            itemStyle: {
              color: 'purple',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            symbolSize: function(val) {
              //点的大小
              return val[2] / 10
            },
            label: {
              show: false,
              position: 'right',
              formatter: function(v) {
                return `${v.data.name} - ${v.data.value[2]}`
              }
            },
            // 鼠标移入显示label
            emphasis: {
              label: {
                show: true
              }
            },
            hoverAnimation: true,
            // 波纹样式
            rippleEffect: {
              brushType: 'stroke'
            }
          }
        ]
      }
    }
  },
  methods: {
    handleClick() {
      console.log('111')
    },
    finished(e) {
      console.log(e)
      console.log('完成')
    }
  },
  mounted() {
    /* const chart = this.$refs['echart'].chart
    chart.on('finished', () => {
      // 从echarts对象中获取bmap对象
      var bmap = chart
        .getModel()
        .getComponent('bmap')
        .getBMap()
      console.log(bmap)
    })
    console.log(chart) */
  }
}
</script>
<style lang="scss" scoped></style>
