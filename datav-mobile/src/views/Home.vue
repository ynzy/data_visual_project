<template>
  <div class="home" v-if="!loading">
    <div class="datav-wrapper" />
    <TopHeader />
    <SalesBar :data="salesBar" />
    <SalesLine :data="saleLine" />
    <SalesPie :data="salePie" />
    <SalesMap />
    <SaleSun :data="salesSun" />
    <SalesRadar :data="salesRadar" />
  </div>
  <div class="home" v-else>
    <div class="loading-wrapper">{{ loadingText }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '@/components/TopHeader/index.vue'
import SalesBar from '@/components/SalesBar/index.vue'
import SalesLine from '@/components/SalesLine/index.vue'
import SalesPie from '@/components/SalesPie/index.vue'
import SalesMap from '@/components/SalesMap/index.vue'
import SaleSun from '@/components/SaleSun/index.vue'
import SalesRadar from '@/components/SalesRadar/index.vue'
import { mobileScreenData } from '@/hooks/mobileScreenData'
export default {
  name: 'Home',
  components: {
    TopHeader,
    SalesBar,
    SalesLine,
    SalesPie,
    SalesMap,
    SaleSun,
    SalesRadar
  },
  setup() {
    // const { saleLine, salePie, salesBar, salesRadar, salesSun, loading, loadingText } = mobileScreenData()
    const screenData = mobileScreenData()
    return {
      ...screenData
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 16px;
  .datav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url('../assets/images/datav_bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .loading-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #fff;
  }
}
</style>
