<template>
  <div class="home">
    <Loading v-if="loading">加载中...</Loading>
    <Container :options="{ width: 3840, height: 2160 }" v-else>
      <div class="test">123123</div>
    </Container>
  </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import useScreenData from '@/hooks/useScreenData'
export default {
  name: 'Home',
  components: {},
  setup() {
    // const screenData = useScreenData()
    const loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2500)
    })
    return {
      loading
      // ...screenData
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  // background-color: rgb(50, 47, 48);
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
}
</style>
