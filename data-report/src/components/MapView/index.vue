<!--  -->
<template>
  <div class="map-view">
    <div class="left">
      <BmapScatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <LiquidFill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <WordCloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BmapScatter from '../BmapScatter/index.vue'
import LiquidFill from '../LiquidFill/index.vue'
import WordCloud from '../WordCloud/index.vue'
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  components: {
    BmapScatter,
    LiquidFill,
    WordCloud
  }
}
</script>

<style lang="scss" scoped>
/* @import url(); 引入css类 */
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background: #fff;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title {
      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
      height: 60px;
      font-size: 14px;
      font-weight: 500;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
    }
    .chart-wrapper {
      width: 100%;
      height: 190px;
    }
  }
}
</style>
