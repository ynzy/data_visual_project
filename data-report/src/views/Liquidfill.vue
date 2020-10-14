<!--  -->
<template>
  <div id="container"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [
        {
          type: 'liquidFill',
          data: [
            0.6,
            0.5,
            0.4,
            {
              value: 0.3,
              direction: 'left',
              itemStyle: {
                opacity: 0.6
              },
              emphasis: {
                itemStyle: {
                  opacity: 0.9
                }
              }
            }
          ],
          color: ['red', 'blue', 'yellow'],
          itemStyle: {
            opacity: 0.6
          },
          emphasis: {
            itemStyle: {
              opacity: 0.3
            }
          },
          // waveAnimation: false,
          // animationDuration: 0,
          // animationDurationUpdate: 0,
          amplitude: 20,
          backgroundStyle: {
            borderWidth: 5,
            borderColor: '#333',
            color: 'purple'
          },
          outline: {
            show: true,
            borderDistance: 2,
            itemStyle: {
              borderWidth: 10,
              borderColor: 'red',
              shadowBlur: 'none'
            }
          },
          shape: 'diamond'
        }
      ]
    })
  }
}
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
