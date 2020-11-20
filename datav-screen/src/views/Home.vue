<template>
  <div class="home">
    <Loading v-if="loading">加载中...</Loading>
    <Container :options="{ width: 3840, height: 2160 }" v-else>
      <div class="header">
        <TopHeader />
      </div>
      <div class="separator-wrapper">
        <Separator />
      </div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <TotalUser
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMounth"
              ref="totalUser"
            />
          </div>
          <div class="left2"><average-age :data="ageData" :avg-age="averageage || 0" ref="averageAge" /></div>
          <div class="left3">
            <TotalDevice :data="deviceData" />
          </div>
          <div class="left4">
            <TotalGender :data="genderData" />
          </div>
          <div class="left5">
            <TotalRider :data="riderData" />
          </div>
          <div class="left6">
            <HotCategory :data="hotCategoryData" />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <CenterHeader :data="headerData" />
          </div>
          <div class="right-top2">
            <TransformCategory :data="['ALL', '北京', '深圳', '上海', '南京', '武汉', '杭州']" />
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <OrderMap />
              </div>
              <div class="right-left2">
                <TransformCategory
                  :data="['订单', '销售额', '用户数', '退单量']"
                  :color="['rgb(178,209,126)', 'rgb(114,166,49)']"
                />
              </div>
              <div class="right-left3">
                <FlyBox startColor="rgb(251,253,142)">
                  <RealTimeOrder :data="realTimeOrderData" />
                </FlyBox>
              </div>
              <div class="right-left4">
                <ScheduleView :data="scheduleViewData" />
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <SalesList :data="salesListData" />
              </div>
              <div class="right-right2"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import { onMounted, ref, getCurrentInstance } from 'vue'
import useScreenData from '@/hooks/useScreenData'
import Separator from '@/components/Separator/index.vue'
import TopHeader from '@/components/TopHeader/index.vue'
import TotalUser from '@/components/TotalUser/index.vue'
import AverageAge from '@/components/AverageAge/index.vue'
import TotalDevice from '@/components/TotalDevice/index.vue'
import TotalGender from '@/components/TotalGender/index.vue'
import TotalRider from '@/components/TotalRider/index.vue'
import HotCategory from '@/components/HotCategory/index.vue'
import CenterHeader from '@/components/CenterHeader/index.vue'
import TransformCategory from '@/components/TransformCategory/index.vue'
import SalesList from '@/components/SalesList/index.vue'
import OrderMap from '@/components/OrderMap/index.vue'
import RealTimeOrder from '@/components/RealTimeOrder/index.vue'
import ScheduleView from '@/components/ScheduleView/index.vue'
export default {
  name: 'Home',
  components: {
    Separator,
    TopHeader,
    TotalUser,
    AverageAge,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    CenterHeader,
    TransformCategory,
    SalesList,
    OrderMap,
    RealTimeOrder,
    ScheduleView
  },
  setup() {
    const context = getCurrentInstance().ctx
    const screenData = useScreenData(context, { once: false })
    const loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 0)
    })
    return {
      loading,
      ...screenData
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  // background-color: rgb(50, 47, 48);
  background: #1d1d1d;
  color: #fff;
  font-size: 48px;
  #screen-container {
    display: flex;
    flex-direction: column;
    .header {
      height: 167px;
      margin-top: 10px;
    }
    .separator-wrapper {
      height: 10px;
      background: #707070;
    }
    .center {
      flex: 1;
      display: flex;
    }
    .left {
      flex: 0 0 860px;
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      width: 860px;
      height: 100%;
      box-sizing: border-box;
      background: rgb(60, 61, 64);
      .left1,
      .left2,
      .left3,
      .left4,
      .left5,
      .left6 {
        padding-bottom: 20px;
      }
      .left1 {
        height: 300px;
      }

      .left2 {
        height: 320px;
      }

      .left3 {
        height: 280px;
      }

      .left4 {
        height: 230px;
      }

      .left5 {
        height: 360px;
      }

      .left6 {
        height: 360px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      height: 100%;
      max-width: 2960px;
      overflow: hidden;
      .right-top1 {
        height: 206px;
        margin-bottom: 20px;
        background: #000;
      }

      .right-top2 {
        height: 48px;
        margin-bottom: 20px;
      }

      .right-bottom {
        flex: 1;
        display: flex;
        .right-left {
          display: flex;
          flex-direction: column;
          width: 1917px;
          .right-left1 {
            height: 999px;
          }
          .right-left2 {
            height: 80px;
            padding-top: 20px;
          }
          .right-left3 {
            height: 350px;
            margin-top: 10px;
          }
          .right-left4 {
            height: 220px;
            margin-top: 10px;
          }
        }
        .right-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 10px;

          .right-right1 {
            width: 100%;
            height: 999px;
            // padding-right: 10px;
            // margin-right: 20px;
            box-sizing: border-box;
          }

          .right-right2 {
            width: 100%;
            height: 650px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
