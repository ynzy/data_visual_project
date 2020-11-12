<template>
  <div class="home">
    <Loading v-if="loading">加载中...</Loading>
    <Container :options="{ width: 3840, height: 2160 }" v-else>
      <div class="header">标题</div>
      <div class="separator-wrapper">
        <Separator />
      </div>
      <div class="center">
        <div class="left">
          <div class="left1">1</div>
          <div class="left2">2</div>
          <div class="left3">3</div>
          <div class="left4">4</div>
          <div class="left5">5</div>
          <div class="left6">6</div>
        </div>
        <div class="right">
          <div class="right-top1">1</div>
          <div class="right-top2">2</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">11</div>
              <div class="right-left2">22</div>
              <div class="right-left3">33</div>
              <div class="right-left4">44</div>
            </div>
            <div class="right-right">
              <div class="right-right1">1</div>
              <div class="right-right2">2</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import useScreenData from '@/hooks/useScreenData'
import Separator from '@/components/Separator/index.vue'
export default {
  name: 'Home',
  components: { Separator },
  setup() {
    // const screenData = useScreenData()
    const loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 0)
    })
    return {
      loading
      // ...screenData
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
        margin-bottom: 20px;
        background: #000;
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
      background: rgb(60, 61, 64);
      .right-top1 {
        height: 206px;
        margin-bottom: 20px;
        background: #000;
      }

      .right-top2 {
        height: 48px;
        margin-bottom: 20px;
        background: #000;
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
            background: #000;
          }
          .right-left2 {
            height: 80px;
            padding-top: 20px;
            background: #000;
          }
          .right-left3 {
            height: 350px;
            margin-top: 10px;
            background: #000;
          }
          .right-left4 {
            height: 220px;
            margin-top: 10px;
            background: #000;
          }
        }
        .right-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          background: rgb(60, 61, 64);

          .right-right1 {
            width: 100%;
            height: 999px;
            padding-right: 10px;
            box-sizing: border-box;
            background: #000;
          }

          .right-right2 {
            width: 100%;
            height: 650px;
            margin-top: 20px;
            background: #000;
          }
        }
      }
    }
  }
}
</style>
