<!-- 标题 -->
<template>
  <div class="top_header">
    <div class="title">外卖数据大屏</div>
    <div class="sub_title">移动端报表</div>
    <div class="update_time">最后更新时间：{{date}}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "TopHeader",
  components: {},
  setup() {
    const date = ref('')
    const _date = new Date()
    const y = _date.getFullYear()
    let m = _date.getMonth() + 1
    let d = _date.getDate()
    m = m < 10 ? `0${m}` : m
    d = d < 10 ? `0${d}` : d
    date.value = `${y}-${m}-${d}`
    return {date}
  },
};
</script>
<style lang="scss" scoped>
.top_header {
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 24px 24px;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  color: #fff;
  z-index: 10;
  .title {
    font-size: 48px;
  }
  .sub_title {
    font-size: 36px;
    margin-top: 20px;
  }
  .update_time {
    font-size: 24px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 40px;
  }
}
</style>
