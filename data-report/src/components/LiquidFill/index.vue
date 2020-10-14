<!--  -->
<template>
  <ve-liquidfill :data="chartData" :settings="chartSettings" height="100%" />
</template>

<script>
function getColor(value) {
  console.log(value)
  return value > 0 && value <= 0.5
    ? 'rgba(97,216,0,.7)'
    : value > 0.5 && value <= 0.8
    ? 'rgba(204,178,26,.7)'
    : value > 0.8
    ? 'rgba(241,47,28,.7)'
    : '#c7c7cb'
}
export default {
  components: {},
  data() {
    return {
      chartSettings: {},
      chartData: {
        columns: ['title', 'percent'],
        rows: [
          {
            title: 'rate',
            percent: 0.98
          }
        ]
      }
    }
  },
  methods: {},
  mounted() {
    this.chartSettings = {
      seriesMap: {
        rate: {
          radius: '80%',
          label: {
            formatter: v => {
              return `${Math.floor(v.data.value * 100)} %`
            },
            textStyle: {
              fontSize: 36,
              color: '#999',
              fontWeight: 'normal'
            },
            position: ['50%', '50%'],
            insideColor: '#fff'
          },
          outline: {
            itemStyle: {
              borderColor: '#aaa4a4',
              borderWidth: 1,
              color: 'none',
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          amplitude: 8,
          color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
