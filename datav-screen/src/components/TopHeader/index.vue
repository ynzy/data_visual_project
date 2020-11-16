<template>
  <div class="top-header">
    <!-- <img class="logo" src="@/assets/image/datav_logo.png" /> -->
    <div class="logo-wrapper">
      <Logo stroke="red" :stroke-width="50" />
    </div>
    <div class="logo-text">
      <div class="cn-text">外卖业务数据大盘</div>
      <div class="en-text">Delivery Overview of Business Data</div>
    </div>
    <div class="right-text">
      <img class="right-logo" src="@/assets/image/TB.png" />
      <div class="date">{{ date }}</div>
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
import { clock as useClock } from '@/hooks/useClock'

export default {
  name: 'topHeader2',
  setup() {
    const { date, time } = useClock()

    return {
      date,
      time
    }
  }
}
</script>

<style lang="scss" scoped>
.top-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(36, 31, 32);
  padding: 0 64px;
  box-sizing: border-box;

  /* .logo {
    width: 395px;
    height: 99px;
  } */
  .logo-wrapper {
    width: 120px;
    height: 120px;
  }
  .logo-text {
    flex: 1;
    margin-left: 40px;

    .cn-text {
      color: rgb(255, 255, 255);
      font-weight: bold;
      font-size: 60px;
      letter-spacing: 2px;
    }

    .en-text {
      color: rgb(255, 255, 255);
      font-size: 35px;
      letter-spacing: 1px;
    }
  }

  .right-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 363px;
      height: 150px;
    }

    .date {
      width: 330px;
      text-align: right;
      font-size: 52px;
      color: rgb(255, 255, 255);
      font-family: DIN;
      font-weight: 500;
    }

    .time {
      width: 220px;
      font-size: 52px;
      color: rgb(197, 251, 121);
      font-family: DIN;
      font-weight: 500;
      margin-left: 30px;
    }
  }
}
</style>
