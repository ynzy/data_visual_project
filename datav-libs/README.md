# rollup_test

参考地址：https://www.yuque.com/docs/share/8b0a2fe4-ce9d-4bf8-a1e9-0ebfe25acfb6?# 《rollop 配置打包 vue 文件》

https://www.yuque.com/docs/share/b85b14c1-67b4-43eb-81fd-28c383e72da1?# 《发布 npm 包》

## 使用方法

使用
我们发布了包以后就可以进行使用了

```js
npm i ynzy_rollup_test
```

- html 使用

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>datav libs example</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3.0.2/dist/vue.global.js"></script>
  <script src="../dist/datav.js"></script>
</head>
<body>
  <div id="app">
    {{massage}}
    <test-component/>
  </div>
  <script>
    Vue.createApp({
      setup() {
        var massage = 'hello world'
        return {
          massage
        }
      }
    }).use(datav).mount('#app')
  </script>
</body>
</html>
```

- vue 项目中使用

```js
import { createApp } from 'vue';
import App from './App.vue';
import datav from 'ynzy_rollup_test';
createApp(App).use(datav).mount('#app');
```

```js
<template>
  <test-component/>
</template>
<script>
</script>
```
