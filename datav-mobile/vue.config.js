const px2rem = require('postcss-px2rem')
const path = require('path') // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}


const postcss = px2rem({
  remUnit: 32
})

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: {
          postcss
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
  },
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    // host: 'localhost',
    port: '8090',
    https: false, // 是否使用https协议
    hot: true, // 是否开启热更新
    proxy: null
  }
}