import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'

import { screenData } from "@/api";

const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']


const salesListMockData = [{ "order": "北京 -10%", "shop": "北京 -19%", "rider": "北京 -12%", "newShop": "北京 -17%", "avgOrder": "北京 -8%" }, { "order": "上海 +19%", "shop": "上海 -7%", "rider": "上海 +6%", "newShop": "上海 +7%", "avgOrder": "上海 +21%" }, { "order": "广州 -6%", "shop": "广州 -5%", "rider": "广州 +23%", "newShop": "广州 -22%", "avgOrder": "广州 +12%" }, { "order": "深圳 -19%", "shop": "深圳 -14%", "rider": "深圳 -13%", "newShop": "深圳 +7%", "avgOrder": "深圳 -7%" }, { "order": "南京 -22%", "shop": "南京 -7%", "rider": "南京 -7%", "newShop": "南京 +16%", "avgOrder": "南京 -8%" }, { "order": "杭州 +15%", "shop": "杭州 +9%", "rider": "杭州 -10%", "newShop": "杭州 -11%", "avgOrder": "杭州 +7%" }, { "order": "合肥 -8%", "shop": "合肥 -5%", "rider": "合肥 +9%", "newShop": "合肥 -7%", "avgOrder": "合肥 -12%" }, { "order": "济南 +20%", "shop": "济南 +8%", "rider": "济南 +16%", "newShop": "济南 +3%", "avgOrder": "济南 -12%" }, { "order": "太原 +8%", "shop": "太原 -4%", "rider": "太原 +5%", "newShop": "太原 +10%", "avgOrder": "太原 +25%" }, { "order": "成都 -7%", "shop": "成都 +19%", "rider": "成都 -24%", "newShop": "成都 +13%", "avgOrder": "成都 -3%" }, { "order": "重庆 +4%", "shop": "重庆 -24%", "rider": "重庆 +12%", "newShop": "重庆 +9%", "avgOrder": "重庆 +4%" }, { "order": "苏州 +16%", "shop": "苏州 -8%", "rider": "苏州 +19%", "newShop": "苏州 -17%", "avgOrder": "苏州 -15%" }, { "order": "无锡 +15%", "shop": "无锡 +12%", "rider": "无锡 +20%", "newShop": "无锡 -13%", "avgOrder": "无锡 -20%" }, { "order": "常州 -18%", "shop": "常州 -19%", "rider": "常州 +15%", "newShop": "常州 +5%", "avgOrder": "常州 +8%" }, { "order": "温州 -21%", "shop": "温州 +20%", "rider": "温州 +8%", "newShop": "温州 -21%", "avgOrder": "温州 +11%" }, { "order": "哈尔滨 -19%", "shop": "哈尔滨 -17%", "rider": "哈尔滨 -9%", "newShop": "哈尔滨 -23%", "avgOrder": "哈尔滨 +18%" }, { "order": "长春 -2%", "shop": "长春 +18%", "rider": "长春 -20%", "newShop": "长春 -4%", "avgOrder": "长春 -24%" }, { "order": "大连 +22%", "shop": "大连 -15%", "rider": "大连 -6%", "newShop": "大连 -16%", "avgOrder": "大连 +9%" }, { "order": "沈阳 -15%", "shop": "沈阳 -8%", "rider": "沈阳 -17%", "newShop": "沈阳 +14%", "avgOrder": "沈阳 -14%" }, { "order": "拉萨 -4%", "shop": "拉萨 -17%", "rider": "拉萨 -17%", "newShop": "拉萨 +19%", "avgOrder": "拉萨 -21%" }, { "order": "呼和浩特 -10%", "shop": "呼和浩特 +15%", "rider": "呼和浩特 +17%", "newShop": "呼和浩特 +21%", "avgOrder": "呼和浩特 +11%" }, { "order": "武汉 +15%", "shop": "武汉 -12%", "rider": "武汉 +18%", "newShop": "武汉 +15%", "avgOrder": "武汉 -7%" }, { "order": "南宁 -17%", "shop": "南宁 -13%", "rider": "南宁 -23%", "newShop": "南宁 -13%", "avgOrder": "南宁 -14%" }]

/* eslint-disable-next-line */
const salesRankMockData = [
  {
    "city": "北京",
    "rate": "-12%",
    "shop": [
      { "shop": "必胜客", "order": 484, "sales": 9447 },
      { "shop": "肯德基", "order": 718, "sales": 9068 },
      { "shop": "麦当劳", "order": 332, "sales": 5756 },
      { "shop": "海底捞", "order": 532, "sales": 5692 }
    ]
  },
  {
    "city": "上海",
    "rate": "-22%",
    "shop": [
      { "shop": "必胜客", "order": 432, "sales": 4345 },
      { "shop": "肯德基", "order": 603, "sales": 6807 },
      { "shop": "麦当劳", "order": 949, "sales": 13409 },
      { "shop": "海底捞", "order": 270, "sales": 4905 }
    ]
  },
  {
    "city": "广州",
    "rate": "+22%",
    "shop": [
      { "shop": "必胜客", "order": 836, "sales": 14813 },
      { "shop": "肯德基", "order": 525, "sales": 6987 },
      { "shop": "麦当劳", "order": 799, "sales": 13950 },
      { "shop": "海底捞", "order": 853, "sales": 8657 }
    ]
  },
  {
    "city": "深圳", "rate": "+1%", "shop": [{ "shop": "必胜客", "order": 876, "sales": 17239 }, { "shop": "肯德基", "order": 603, "sales": 7808 }, { "shop": "麦当劳", "order": 560, "sales": 8859 }, { "shop": "海底捞", "order": 86, "sales": 1564 }]
  }, { "city": "南京", "rate": "+22%", "shop": [{ "shop": "必胜客", "order": 810, "sales": 11963 }, { "shop": "肯德基", "order": 401, "sales": 4727 }, { "shop": "麦当劳", "order": 532, "sales": 8820 }, { "shop": "海底捞", "order": 341, "sales": 5606 }] }, { "city": "杭州", "rate": "-23%", "shop": [{ "shop": "必胜客", "order": 752, "sales": 9407 }, { "shop": "肯德基", "order": 920, "sales": 13413 }, { "shop": "麦当劳", "order": 577, "sales": 9959 }, { "shop": "海底捞", "order": 353, "sales": 3886 }] }, { "city": "合肥", "rate": "-23%", "shop": [{ "shop": "必胜客", "order": 781, "sales": 11964 }, { "shop": "肯德基", "order": 573, "sales": 10296 }, { "shop": "麦当劳", "order": 86, "sales": 1192 }, { "shop": "海底捞", "order": 231, "sales": 3862 }] }, { "city": "济南", "rate": "+22%", "shop": [{ "shop": "必胜客", "order": 34, "sales": 479 }, { "shop": "肯德基", "order": 781, "sales": 13526 }, { "shop": "麦当劳", "order": 519, "sales": 5605 }, { "shop": "海底捞", "order": 916, "sales": 15975 }] }, { "city": "太原", "rate": "-6%", "shop": [{ "shop": "必胜客", "order": 601, "sales": 11094 }, { "shop": "肯德基", "order": 646, "sales": 11621 }, { "shop": "麦当劳", "order": 201, "sales": 3083 }, { "shop": "海底捞", "order": 45, "sales": 579 }] }, { "city": "成都", "rate": "-4%", "shop": [{ "shop": "必胜客", "order": 606, "sales": 12029 }, { "shop": "肯德基", "order": 287, "sales": 4322 }, { "shop": "麦当劳", "order": 729, "sales": 8835 }, { "shop": "海底捞", "order": 225, "sales": 2925 }] }, { "city": "重庆", "rate": "-14%", "shop": [{ "shop": "必胜客", "order": 25, "sales": 359 }, { "shop": "肯德基", "order": 533, "sales": 6166 }, { "shop": "麦当劳", "order": 337, "sales": 6153 }, { "shop": "海底捞", "order": 290, "sales": 4622 }] }, { "city": "苏州", "rate": "-19%", "shop": [{ "shop": "必胜客", "order": 836, "sales": 9413 }, { "shop": "肯德基", "order": 986, "sales": 11486 }, { "shop": "麦当劳", "order": 299, "sales": 3695 }, { "shop": "海底捞", "order": 147, "sales": 2382 }] }, { "city": "无锡", "rate": "-11%", "shop": [{ "shop": "必胜客", "order": 415, "sales": 5469 }, { "shop": "肯德基", "order": 658, "sales": 10218 }, { "shop": "麦当劳", "order": 339, "sales": 3922 }, { "shop": "海底捞", "order": 756, "sales": 8867 }] }, { "city": "常州", "rate": "-17%", "shop": [{ "shop": "必胜客", "order": 444, "sales": 7374 }, { "shop": "肯德基", "order": 196, "sales": 2528 }, { "shop": "麦当劳", "order": 409, "sales": 7967 }, { "shop": "海底捞", "order": 376, "sales": 6399 }] }, { "city": "温州", "rate": "+13%", "shop": [{ "shop": "必胜客", "order": 612, "sales": 9222 }, { "shop": "肯德基", "order": 452, "sales": 5460 }, { "shop": "麦当劳", "order": 190, "sales": 2190 }, { "shop": "海底捞", "order": 327, "sales": 5928 }] }, { "city": "哈尔滨", "rate": "+10%", "shop": [{ "shop": "必胜客", "order": 894, "sales": 14911 }, { "shop": "肯德基", "order": 241, "sales": 2610 }, { "shop": "麦当劳", "order": 665, "sales": 11717 }, { "shop": "海底捞", "order": 182, "sales": 3412 }] }, { "city": "长春", "rate": "+15%", "shop": [{ "shop": "必胜客", "order": 619, "sales": 6765 }, { "shop": "肯德基", "order": 693, "sales": 7726 }, { "shop": "麦当劳", "order": 738, "sales": 7564 }, { "shop": "海底捞", "order": 449, "sales": 8953 }] }, { "city": "大连", "rate": "-7%", "shop": [{ "shop": "必胜客", "order": 266, "sales": 5136 }, { "shop": "肯德基", "order": 287, "sales": 3022 }, { "shop": "麦当劳", "order": 476, "sales": 8496 }, { "shop": "海底捞", "order": 913, "sales": 10873 }] }, { "city": "沈阳", "rate": "+7%", "shop": [{ "shop": "必胜客", "order": 650, "sales": 8150 }, { "shop": "肯德基", "order": 948, "sales": 16874 }, { "shop": "麦当劳", "order": 693, "sales": 7463 }, { "shop": "海底捞", "order": 915, "sales": 14255 }] }, { "city": "拉萨", "rate": "+8%", "shop": [{ "shop": "必胜客", "order": 596, "sales": 11079 }, { "shop": "肯德基", "order": 640, "sales": 12204 }, { "shop": "麦当劳", "order": 374, "sales": 5366 }, { "shop": "海底捞", "order": 169, "sales": 2274 }] }, { "city": "呼和浩特", "rate": "-16%", "shop": [{ "shop": "必胜客", "order": 971, "sales": 11778 }, { "shop": "肯德基", "order": 372, "sales": 6744 }, { "shop": "麦当劳", "order": 123, "sales": 1831 }, { "shop": "海底捞", "order": 799, "sales": 12040 }] }, { "city": "武汉", "rate": "+13%", "shop": [{ "shop": "必胜客", "order": 5, "sales": 53 }, { "shop": "肯德基", "order": 408, "sales": 6115 }, { "shop": "麦当劳", "order": 557, "sales": 7341 }, { "shop": "海底捞", "order": 531, "sales": 7157 }] }, {
    "city": "南宁", "rate": "+8%", "shop": [{ "shop": "必胜客", "order": 133, "sales": 1927 }, { "shop": "肯德基", "order": 503, "sales": 7077 }, { "shop": "麦当劳", "order": 700, "sales": 10318 }, { "shop": "海底捞", "order": 349, "sales": 4882 }]
  }
]


function random(val) {
  return Math.floor(Math.random() * val)
}

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
  const salesRankData = ref(salesRankMockData)


  let userData = reactive({

  })

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
      console.log(res);
      // Object.keys(res).forEach(item => {
      //   userData[item] = res[item]
      // })
      // userData = ref(res)
      // console.log(userData);
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
    // update()

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