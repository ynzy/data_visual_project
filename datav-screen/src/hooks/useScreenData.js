import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'

import { screenData } from "@/api";

const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']

// 获取现在的时间
function getNowTime() {
  const now = new Date()
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}
export default function useScreenData() {
  const loading = ref(true)
  const todayUser = ref(0)
  const growthLastDay = ref(0)
  const growthLastMounth = ref(0)
  const ageData = ref([])
  const averageage = ref(0)
  const deviceData = ref({})
  const genderData = ref([])
  const riderData = ref({})
  const hotCategoryData = ref({})
  const headerData = ref({})
  const realTimeOrderData = ref({ date: [], data: [] })
  const salesListData = ref([])
  const salesRankData = ref([])

  let task = null

  // 获取核心指标
  const getKeyValues = ({ key, index }) => {
    const data = headerData.value
    // 如果已经存在该值，直接取到该值，否则返回0
    if (data && data[key] && data[key].length) return +data[key][index].endVal
    return 0
  }

  const update = () => {
    screenData().then(res => {
      //! 用户总数据
      todayUser.value = res.userToday
      growthLastDay.value = +res.growthLastDay || 0
      growthLastMounth.value = +res.growthLastMounth || 0
      growthLastDay.value = +res.growthLastDay || 0
      //! 年龄分布数据
      const _ageData = []
      res.age.forEach((item, index) => {
        if (ageData.value[index]) {
          _ageData.push({
            startValue: ageData.value[index].value,
            value: item.value,
            axis: item.key,
            color: color[index]
          })
        } else {
          _ageData.push({
            startValue: 0,
            value: item.value,
            axis: item.key,
            color: color[index]
          })
        }
      });
      ageData.value = _ageData
      averageage.value = +res.averageAge
      //! 登录设备数据
      deviceData.value = {
        totalDevices: res.totalDevices,
        devices: res.devices
      }
      //! 性别分布数据
      genderData.value = res.gender
      //! 骑手数据
      riderData.value = res.rider
      //! 当前热门分类数据
      hotCategoryData.value = res.category
      //! 核心指标数据
      const _headerData = {
        headerData: [
          {
            title: '今日销售额',
            subTitle: "Today's Sales Amount",
            startVal: getKeyValues({ key: 'headerData', index: 0 }),
            endVal: res.salesToday,
            img: 'https://www.youbaobao.xyz/datav-res/money.png'
          },
          {
            title: '今日订单量',
            subTitle: "Today's Total Orders",
            startVal: getKeyValues({ key: 'headerData', index: 1 }),
            endVal: res.orderToday,
            img: 'https://www.youbaobao.xyz/datav-res/order.png'
          },
          {
            title: '今日交易用户数',
            subTitle: "Today's Payed Users",
            startVal: getKeyValues({ key: 'headerData', index: 2 }),
            endVal: res.orderUser,
            img: 'https://www.youbaobao.xyz/datav-res/member.png'
          },
          {
            title: '今日新增用户数',
            subTitle: "Today's New Users",
            startVal: getKeyValues({ key: 'headerData', index: 3 }),
            endVal: res.userToday,
            img: 'https://www.youbaobao.xyz/datav-res/follow.png'
          }
        ],
        project: [
          { title: '转化率', value: `${res.covertRate}%`, img: 'https://www.youbaobao.xyz/datav-res/success.png' },
          { title: '退单率', value: `${res.returnRate}%`, img: 'https://www.youbaobao.xyz/datav-res/failed.png' }
        ]
      }
      headerData.value = _headerData
      //! 实时订单数据
      realTimeOrderData.value = {
        date: [...realTimeOrderData.value.date, getNowTime()],
        data: [...realTimeOrderData.value.data, res.realTimeOrder],
      }
      //! 销售列表数据
      salesListData.value = res.areaSales

      //! 区域销售排行数据
      salesRankData.value = res.areaTop
      loading.value = false
    })
  }
  onMounted(() => {
    task = setInterval(() => {
      update()
    }, 3000)

  })
  onUnmounted(() => {
    task && clearInterval(task)
  })
  return {
    loading,
    userData,
    todayUser,
    growthLastDay,
    growthLastMounth,
    ageData,
    averageage,
    deviceData,
    genderData,
    riderData,
    hotCategoryData,
    headerData,
    salesListData,
    realTimeOrderData,
    salesRankData
  }
}