<!-- 区域销售大盘环比列表 -->
<template>
  <div class="sales-list">
    <div class="title">
      区域销售大盘环比分析
    </div>
    <div class="list">
      <BaseScrollList :config="config" />
      <!-- <AutoScrollTable :config="config" /> -->
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from 'vue'
export default {
  name: 'SalesList',
  props: {
    data: Array
  },
  components: {},
  setup(props) {
    const state = reactive({
      config: {}
    })

    const update = () => {
      const data = []
      const aligns = []
      const headerIndexData = []
      for (let i = 0; i < props.data.length; i++) {
        data[i] = []
        aligns.push('center')
        if (i % 2 === 0) {
          // 偶数
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgb(40,40,40)">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        } else {
          // 奇数
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgb(40,40,40)">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        }
        // 将一维数据转换为二维数组
        // 5代表我们有5列
        for (let j = 0; j < 5; j++) {
          let text = ''
          switch (j) {
            case 0:
              text = props.data[i].order
              break
            case 1:
              text = props.data[i].shop
              break
            case 2:
              text = props.data[i].rider
              break
            case 3:
              text = props.data[i].newShop
              break
            case 4:
              text = props.data[i].avgOrder
              break
            default:
          }
          if (j === 1 || j === 3) {
            data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`)
          } else {
            data[i].push(`<div>${text}</div>`)
          }
        }
      }
      const _config = {
        headerData: ['城市订单量', '店铺数', '接单骑手人数', '新店铺数量', '人均订单量'],
        data,
        headerHeight: '55',
        headerFontSize: 24,
        headerColor: '#fff',
        headerBg: 'rgb(80,80,80)',
        headerIndexData,
        headerIndex: true,
        headerIndexContent: '',
        rowFontSize: 24,
        rowColor: '#fff',
        rowBg: ['rgb(40,40,40)', 'rgb(55,55,55)'],
        aligns,
        rowNum: 10
      }
      state.config = _config
    }

    const stop = watch(
      () => props.data,
      () => {
        update()
        stop() // 停止监听
      }
    )
    onMounted(() => {
      update()
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped>
.sales-list {
  width: 100%;
  height: 100%;
  background: rgb(55, 55, 55);
  padding: 20px 40px;
  box-sizing: border-box;
  .title {
    font-size: 36px;
    margin-left: 20px;
  }

  .list {
    width: 100%;
    height: 880px;
    margin-top: 20px;
    padding: 30px 0;
    box-sizing: border-box;
    background: rgb(40, 40, 40);
  }
}
</style>
