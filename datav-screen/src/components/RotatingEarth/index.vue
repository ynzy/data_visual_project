<!-- 3D地球 -->
<template>
  <div class="rotating-earch">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import 'echarts-gl'

const texture_pic = require('@/assets/image/datav-gl-texture.jpg')
export default {
  name: 'RotatingEarth',
  components: {},
  setup() {
    const options = ref({})
    const update = () => {
      console.log('使用')
      options.value = {
        globe: {
          baseTexture: texture_pic // 地图纹理，使用本地图片
        }
      }
    }
    onMounted(update)
    return {
      options
    }
  }
}
</script>
<style lang="scss" scoped>
.rotating-earch {
  width: 100%;
  height: 100%;
}
</style>
