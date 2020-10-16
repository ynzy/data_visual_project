/**
 * 处理千分号
 * 45,510,265
 * 3,324,073
 */
function format(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}
/**
 * 处理金额
 */
function wrapperMoney(o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00'
}

/**
 * 处理数字
 */
function wrapperNumber(o, k) {
  return o && o[k] ? format(o[k]) : 0
}
/**
 * 返回原生数值
 */
function wrapperOriginalNumber(o, k) {
  return o && o[k] ? o[k] : 0
}
/**
 * 处理数组
 */
function wrapperArray(o, k) {
  return o && o[k] ? o[k] : []
}
/**
 * 处理百分号
 */
function wrapperPercentage(o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}


export default {
  inject: ['getReportData', 'getWordCloud', 'getMapData'],
  computed: {
    // reportData
    reportData() {
      return this.getReportData()
    },
    // 累计销售额
    salesToday() {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    // 累计订单量
    orderToday() {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend() {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    // 今日交易用户数
    orderUser() {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate() { //退货率
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    // 累计用户数
    userToday() {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay() {
      return wrapperNumber(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth() {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },
    // 销售面板
    orderFullYear() {
      return wrapperArray(this.reportData, 'orderFullYear')
    },
    orderFullYearAxis() {
      return wrapperArray(this.reportData, 'orderFullYearAxis')
    },
    orderRank() {
      return wrapperArray(this.reportData, 'orderRank')
    },
    userFullYear() {
      return wrapperArray(this.reportData, 'userFullYear')
    },
    userFullYearAxis() {
      return wrapperArray(this.reportData, 'userFullYearAxis')
    },
    userRank() {
      return wrapperArray(this.reportData, 'userRank')
    },
    // 词云图
    wordCloud() {
      return this.getWordCloud()
    },
    // mapData
    mapData() {
      return this.getMapData()
    },
  },
  filters: {
    format(v) {
      return format(v)
    }
  },
}