import { onMounted, onUnmounted, reactive, ref } from 'vue'

const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']

const ageMockData = [
  { "startValue": 0, "value": 131107, "axis": "0-20", "color": "rgb(116,166,49)" },
  { "startValue": 0, "value": 330831, "axis": "20-30", "color": "rgb(190,245,99)" },
  { "startValue": 0, "value": 551238, "axis": "30-50", "color": "rgb(202,252,137)" },
  { "startValue": 0, "value": 31088, "axis": ">50", "color": "rgb(251,253,142)" }
]

const deviceMockData = {
  "totalDevices": 1070909,
  "devices": [
    { "key": "Android", "value": 423676 },
    { "key": "iOS", "value": 373581 },
    { "key": "PC", "value": 273652 }
  ]
}

const genderMockData = [
  { "key": "male", "value": 1442542 },
  { "key": "female", "value": 1442548 }
]

let task = null

function random(val) {
  return Math.floor(Math.random() * val)
}

// 获取现在的时间
function getNowTime() {
  const now = new Date()
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}

export default function useScreenData() {
  const todayUser = ref(10000)
  const growthLastDay = ref(10.25)
  const growthLastMounth = ref(15.15)
  const ageData = ref(ageMockData)
  const averageage = ref(15.15)
  const deviceData = ref(deviceMockData)

  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10
      growthLastDay.value = growthLastDay.value + 1
      growthLastMounth.value = growthLastMounth.value + 1
      averageage.value = averageage.value + 1
      // deviceData.totalDevices = deviceData.totalDevices + 10

      // 浅拷贝
      const _ageData = [...ageData.value]
      _ageData.forEach(item => {
        item.startValue = item.value
        item.value = item.value + random(100)
      })
      ageData.value = _ageData

      const _deviceData = { ...deviceData.value }
      _deviceData.totalDevices += 10
      _deviceData.devices.forEach(item => {
        item.value += random(100)
      })
      deviceData.value = _deviceData
    }, 3000)

  })
  onUnmounted(() => {
    task && clearInterval(task)
  })
  return {
    todayUser,
    growthLastDay,
    growthLastMounth,
    ageData,
    averageage,
    deviceData
  }
}