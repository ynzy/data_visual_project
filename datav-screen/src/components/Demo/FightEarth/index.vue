<!-- 地球航班显示 -->
<template>
  <div class="fight-earth">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { ref } from 'vue'
import echarts from 'echarts'
import 'echarts-gl'
import flightsJson from '@/assets/json/flights.json'
const texture_pic = require('@/assets/image/bathymetry_bw_composite_4k.jpg')
const start_bg = require('@/assets/image/star-bg.jpg')

export default {
  name: 'FightEarth',
  components: {},
  setup() {
    const options = ref({})
    const data = flightsJson
    let airports = data.airports.map(function(item) {
      return {
        coord: [item[3], item[4]]
      }
    })
    function getAirportCoord(idx) {
      return [data.airports[idx][3], data.airports[idx][4]]
    }

    // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
    let routesGroupByAirline = {}
    data.routes.forEach(function(route) {
      let airline = data.airlines[route[0]]
      let airlineName = airline[0]
      if (!routesGroupByAirline[airlineName]) {
        routesGroupByAirline[airlineName] = []
      }
      routesGroupByAirline[airlineName].push(route)
    })

    let pointsData = []
    data.routes.forEach(function(airline) {
      pointsData.push(getAirportCoord(airline[1]))
      pointsData.push(getAirportCoord(airline[2]))
    })

    let series = data.airlines
      .map(function(airline) {
        let airlineName = airline[0]
        let routes = routesGroupByAirline[airlineName]

        if (!routes) {
          return null
        }
        return {
          type: 'lines3D',
          name: airlineName,

          effect: {
            show: true,
            trailWidth: 2,
            trailLength: 0.15,
            trailOpacity: 1,
            trailColor: 'rgb(30, 30, 60)'
          },

          lineStyle: {
            width: 1,
            color: 'rgb(50, 50, 150)',
            // color: 'rgb(118, 233, 241)',
            opacity: 0.1
          },
          blendMode: 'lighter',

          data: routes.map(function(item) {
            return [airports[item[1]].coord, airports[item[2]].coord]
          })
        }
      })
      .filter(function(series) {
        return !!series
      })

    series.push({
      type: 'scatter3D',
      coordinateSystem: 'globe',
      blendMode: 'lighter',
      symbolSize: 2,
      itemStyle: {
        color: 'rgb(50, 50, 150)',
        opacity: 0.2
      },
      data: pointsData
    })

    options.value = {
      legend: {
        selectedMode: 'single',
        left: 'left',
        data: Object.keys(routesGroupByAirline),
        orient: 'vertical',
        textStyle: {
          color: '#fff'
        }
      },
      globe: {
        baseTexture: texture_pic, // 地图纹理，使用本地图片
        heightTexture: texture_pic,
        environment: start_bg,
        displacementScale: 0.1,
        displacementQuality: 'high',
        // baseColor: '#000',
        shading: 'realistic',
        realisticMaterial: {
          roughness: 0.2,
          metalness: 0
        },

        postEffect: {
          enable: true,
          depthOfField: {
            enable: false,
            focalDistance: 150
          }
        },
        temporalSuperSampling: {
          enable: true
        },
        light: {
          ambient: {
            intensity: 0
          },
          main: {
            intensity: 0.1,
            shadow: true
          },
          ambientCubemap: {
            texture: './assets/lake.hdr',
            exposure: 1,
            diffuseIntensity: 0.5,
            specularIntensity: 2
          }
        },
        viewControl: {
          autoRotate: false
        },
        silent: true
      },
      series: series
    }
    return {
      options
    }
  }
}
</script>
<style lang="scss" scoped>
.fight-earth {
  width: 100%;
  height: 100%;
}
</style>
