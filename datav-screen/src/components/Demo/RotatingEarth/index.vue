<!-- 3D地球 -->
<template>
  <div class="rotating-earch">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import 'echarts-gl'
import echarts from 'echarts'
const texture_pic = require('@/assets/image/datav-gl-texture.jpg')
const start_bg = require('@/assets/image/star-bg.jpg')
export default {
  name: 'RotatingEarth',
  components: {},
  setup() {
    const options = ref({})
    const update = () => {
      console.log('使用')
      options.value = {
        globe: {
          baseTexture: texture_pic, // 地图纹理，使用本地图片
          heightTexture: texture_pic,
          displacementScale: 0.04, // 地球顶点位置，可以使地球更加立体
          environment: start_bg, // 背景环境贴图
          shading: 'realistic',
          realisticMaterial: {
            roughness: 1
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambient: {
              intensity: 1
            }
          }
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
