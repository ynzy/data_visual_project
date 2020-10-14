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
    const data = [
      {
        name: 'Farrah Abraham',
        value: 366
      },
      {
        name: '数据可视化',
        value: 111
      },
      {
        name: 'sam',
        value: 222
      },
      {
        name: '大数据',
        value: 666
      },
      {
        name: '美食',
        value: 666
      },
      {
        name: '广州',
        value: 666
      }
    ]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [
        {
          type: 'wordCloud',
          data,
          shape: 'circle',
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function() {
                // Random color
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') +
                  ')'
                )
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          }
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
