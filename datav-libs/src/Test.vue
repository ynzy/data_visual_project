<template>
<div class="test">
  <div>{{ message }}</div>
  <div>count:{{ count }}</div>
  <div>double:{{ doubleCount }}</div>
  <button @click="handleClick">点击看double效果2sd34</button>
</div>
</template>

<script>
import {
  computed,
  ref
} from 'vue';
export default {
  name: 'TestComponent',
  setup() {
    const message = 'hello world';
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2);
    const handleClick = () => {
      count.value++;
    };
    return {
      message,
      count,
      doubleCount,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
