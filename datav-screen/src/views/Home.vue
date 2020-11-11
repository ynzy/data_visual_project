<template>
  <div class="home">
    <Container :style="style" :options="{ width: 3840, height: 2160 }">
      <div class="test">123123</div>
      <button @click="changeStyle" style="font-size: 200px">改变宽高比</button>
    </Container>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Home',
  setup() {
    const state = reactive({ style: {} })
    const changeStyle = () => {
      state.style = {
        ...state.style,
        height: '20px'
      }
    }
    return {
      ...toRefs(state),
      changeStyle
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  font-size: 140px;
  color: red;
  transform: scale(1, 1);
}
</style>
