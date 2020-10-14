<!--  -->
<template>
  <ve-bmap
    :settings="chartSettings"
    :title="title"
    :series="series"
    :tooltip="tooltip"
    :after-set-option-once="afterSet"
    height="100%"
  >
  </ve-bmap>
</template>

<script>
import mapStyle from '../../../src/utils/mapStyle.json'
import { scatterData, geoCoordMap } from '../../../src/utils/scatterData'

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

export default {
  components: {},
  data() {
    return {
      title: {
        text: '外卖销售数据大盘',
        subtext: '销售趋势统计',
        sublink: 'https://www.baidu.com',
        left: 'center'
      },
      chartSettings: {
        key: 'FkCqbmKtfHsKPtnEjvhjFcg6pwlN03jO',
        bmap: {
          center: [116.404, 39.915],
          zoom: 5,
          roam: false,
          mapStyle
        }
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
  },
  methods: {
    afterSet: function(echarts) {
      var bmap = echarts
        .getModel()
        .getComponent('bmap')
        .getBMap()
      bmap.setMapStyle(mapStyle)
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped></style>
