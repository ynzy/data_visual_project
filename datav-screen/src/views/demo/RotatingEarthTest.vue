<!--  -->
<template>
  <div class="test-wrapper">
    <RotatingEarth />
  </div>
</template>

<script>
import RotatingEarth from '@/components/Demo/RotatingEarth/index.vue'
import { onMounted } from 'vue'
export default {
  name: '',
  components: { RotatingEarth }
}
</script>
<style lang="scss" scoped>
.test-wrapper {
  width: 100%;
  height: 100%;
}
</style>
