<!--  -->
<template>
  <v-chart
    :options="chartOptions"
  />
</template>

<script>

export default {
  data() {
    return {
      chartOptions: {
        xAxis: {
          type: "category"
        },
        yAxis: {},
        series: [{
          type: "line",
          data: [100,200,300]
        }]
      }
    }
  },
  methods: {},
  mounted() {
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
