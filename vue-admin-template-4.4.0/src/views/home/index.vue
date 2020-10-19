<template>
  <div class="home">
    <TopView />
    <SaleView />
    <BottomView />
    <MapView />
  </div>
</template>

<script>
import TopView from "./components/TopView/index.vue";
import SaleView from "./components/SaleView/index.vue";
import MapView from "./components/MapView/index.vue";
import BottomView from "./components/BottomView/index.vue";
import { wordcloud, mapScatter, screenData } from "@/api/home";

export default {
  name: "Home",
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
    };
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    };
  },
  methods: {
    getReportData() {
      return this.reportData;
    },
    getWordCloud() {
      return this.wordCloud;
    },
    getMapData() {
      return this.mapData;
    }
  },
  mounted() {
    wordcloud().then(data => {
      this.wordCloud = data;
    });
    mapScatter().then(data => {
      this.mapData = data;
    });
    screenData().then(data => {
      this.reportData = data;
    });
  }
};
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
