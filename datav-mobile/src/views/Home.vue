<template>
  <div class="home">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  setup(){
    return {
      options:{
        title: {
                text: '第一个 ECharts 实例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 500px;
  width: 100%;
  font-size: 16px;
}
</style>