<template>
  <div class="test">
    <div>{{ message }}</div>
    <div>double:{{doubleCount}}</div>
  </div>
</template>

<script>
import {computed,ref } from 'vue'
export default {
  name: 'TestComponent',
  setup() {
    const message = 'hello world'
    const count = ref(1)
    const doubleCount = computed(()=>count.value*2)
    return {
      message,
      doubleCount
    }
  },
}
</script>
<style lang='scss' scoped>
.test {
  color: red;
}
</style>