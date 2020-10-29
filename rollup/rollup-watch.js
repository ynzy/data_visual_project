const rollup = require('rollup')
const inputOptions = require('./rollup-watch-input-options')
const outputOptions = require('./rollup-watch-output-options')
const watchOptions = require('./rollup-watch-options')

const options = {
  ...inputOptions,
  output: outputOptions,
  watchOptions
} // 生成rollup的options

const watcher = rollup.watch(options) // 调用rollup的api启动监听

watcher.on('event', event => {
  console.log('重新打包中...', event.code)
}) // 处理监听事件

// watcher.close() // 手动关闭监听