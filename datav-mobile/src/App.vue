<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  background-image: url('./assets/images/datav_bg2.jpg');
  background-size: 100% 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
