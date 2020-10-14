<!--  -->
<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings" height="100%" />
</template>

<script>
export default {
  components: {},
  data() {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
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
      },
      chartSettings: {
        color: [
          'rgba(97,216,0,.7)',
          'rgba(204,178,26,.7)',
          'rgba(245,166,35,.7)',
          'rgba(156,13,113,.7)'
        ]
      }
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped></style>
