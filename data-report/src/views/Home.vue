<template>
  <div class="home">
    <TopView />
    <SaleView />
    <BottomView />
    <MapView />
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SaleView from '../components/SaleView'
import MapView from '../components/MapView'
import BottomView from '../components/BottomView'
import { wordcloud, mapScatter, screenData } from '../api/index'

export default {
  name: 'Home',
  components: {
    TopView,
    SaleView,
    MapView,
    BottomView
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  mounted() {
    wordcloud().then(data => {
      this.wordCloud = data
    })
    mapScatter().then(data => {
      this.mapData = data
    })
    screenData().then(data => {
      this.reportData = data
    })
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  // height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
