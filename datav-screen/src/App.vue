<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <!-- <router-view /> -->
  <test />
  <!-- <svg width="50" height="50" style="color:red">
    <use href="#more"></use>
  </svg>
  <svg width="50" height="50" style="color:green">
    <use href="#filledArrowRight"></use>
  </svg>
  <svg width="50" height="50" style="color:green">
    <use href="#arrowRight"></use>
  </svg>
  <Icon name="more" class="common_icon" />
  <Icon name="lianxiren" class="common_icon" />
  <Icon name="iconall" class="common_icon" />
  <Icon name="iconpic" class="common_icon" /> -->
  <SvgAnimation />
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.icon_wrapper {
  height: 20px;
  width: 20px;
  color: red;
}
.common_icon {
  width: 50px;
  height: 50px;
  color: red;
}
</style>
