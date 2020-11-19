<!-- 江苏地图警告 -->
<template>
  <vue-echarts :options="options" />
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import echarts from 'echarts'
import cloneDeep from 'lodash/cloneDeep'
const jiangsuMapData = require('@/assets/json/jiangsuMapData.json')
const hebeiMapData = require('@/assets/json/hebeiMapData.json')
export default {
  name: 'JiangsuMapWarning',
  components: {},
  setup() {
    const options = ref({})
    const mapData = jiangsuMapData
    let timer
    const center = []
    mapData.features.forEach(item => {
      if (item.properties) {
        center.push({
          key: item.properties.name,
          value: item.properties.center
        })
      }
    })
    console.log(center)
    const update = () => {
      // 向echarts注册地图数据
      echarts.registerMap('jiangsu', mapData)
      // echarts.registerMap('hebei', hebeiMapData)
      // console.log(echarts.getMap('jiangsu'))
      options.value = {
        visualMap: {
          show: true,
          max: 100,
          seriesIndex: [0],
          inRange: {
            color: ['#a5dcf4', '#006edd']
          }
        },
        geo: [
          {
            map: 'jiangsu', // 显示地图
            zoom: 1, // 默认显示级别
            roam: false, // 启动鼠标滚轮地图缩放
            scaleLimit: {
              // 缩放级别
              min: 0,
              max: 3
            },
            itemStyle: {
              areaColor: '#013c62',
              shadowColor: '#013c62',
              shadowBlur: 20,
              shadowOffsetX: -5,
              shadowOffsetY: 15
            }
          }
        ],
        series: [
          {
            type: 'map',
            mapType: 'jiangsu',
            label: {
              show: true,
              color: '#fff',
              emphasis: {
                color: '#fff',
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#2980b9',
                borderWidth: 1,
                areaColor: '#12235c'
              },
              emphasis: {
                areaColor: '#fa8c16',
                borderWidth: 0,
                color: 'green'
              }
            },
            data: center.map(centerItem => {
              const value = Math.random() * 100
              return {
                name: centerItem.key,
                value //人口数(单位：万)
              }
            })
          },
          {
            type: 'effectScatter',
            // { value: center[0].value, city: center[0].key }
            data: [],
            coordinateSystem: 'geo',
            symbolSize: 14,
            itemStyle: {
              color: '#feae21'
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: function(params) {
                  return `{title|${params.data.city}}\n{content|发生 xx 事件}`
                },
                backgroundColor: 'rgba(254,174,33,0.8)',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#faf7fb',
                rich: {
                  title: {
                    padding: [0, 10, 10, 10],
                    color: '#fff'
                  },
                  content: {
                    padding: [10, 10, 0, 10],
                    color: '#fff'
                  }
                }
              },
              emphasis: {
                show: true
              }
            }
          },
          {
            type: 'effectScatter',
            data: [],
            coordinateSystem: 'geo',
            symbolSize: 14,
            itemStyle: {
              color: '#e93f42'
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: function(params) {
                  return `{title|${params.data.city}}\n{content|发生 xx 事件}`
                },
                backgroundColor: 'rgba(233,63,66,.9)',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#fff',
                rich: {
                  title: {
                    padding: [0, 10, 10, 10],
                    color: '#fff'
                  },
                  content: {
                    padding: [10, 10, 0, 10],
                    color: '#fff'
                  }
                }
              },
              emphasis: {
                show: true
              }
            }
          },
          {
            type: 'effectScatter',
            data: [],
            coordinateSystem: 'geo',
            symbolSize: 14,
            itemStyle: {
              color: '#08baec'
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: function(params) {
                  return `{title|${params.data.city}}\n{content|发生 xx 事件}`
                },
                backgroundColor: 'rgba(8,186,236,.9)',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#fff',
                rich: {
                  title: {
                    padding: [0, 10, 10, 10],
                    color: '#fff'
                  },
                  content: {
                    padding: [10, 10, 0, 10],
                    color: '#fff'
                  }
                }
              },
              emphasis: {
                show: true
              }
            }
          }
        ]
      }

      // 测试：随机展示事件信息
      timer = setInterval(() => {
        const _options = cloneDeep(options.value)
        console.log(_options)
        // 初始化数据
        for (let i = 1; i < 3; i++) {
          _options.series[i].data = []
        }
        // 生成城市随机数
        const cityLength = center.length
        const cityIndex = Math.floor(Math.random() * cityLength)
        const eventIndex = Math.floor(Math.random() * 3) + 1
        _options.series[eventIndex].data = [
          {
            city: center[cityIndex].key,
            value: center[cityIndex].value
          }
        ]
        options.value = _options
      }, 2000)
    }
    onMounted(update)

    onUnmounted(() => timer && clearInterval(timer))
    return {
      options
    }
  }
}
</script>
<style lang="scss" scoped></style>
