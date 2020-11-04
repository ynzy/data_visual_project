//! scripts/build.js
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const rollup = require('rollup')
const terser = require('terser')

//! 1. 创建dist目录 
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}
//! 2. 生成rollup配置 , 进入查看
let builds = require('./config').getAllBuilds()

//! 3. rollup配置过滤 
// filter builds via command line arg
if (process.argv[2]) {
  //! "build:ssr": "npm run build -- web-runtime-cjs,web-server-renderer",
  //! [ '/Users/sam/.nvm/versions/node/v11.2.0/bin/node',
  //! '/Users/sam/WebstormProjects/vue/scripts/build.js',
  //! 'web-runtime-cjs,web-server-renderer' ]
  //! 首先将参数通过逗号分隔为一个filters数组，然后遍历builds数组，寻找output.file或_name中任一个包含filters中任一个的配置项
  const filters = process.argv[2].split(',')
  builds = builds.filter(b => {
    return filters.some(f => b.output.file.indexOf(f) > -1 || b._name.indexOf(f) > -1)
  })
} else {
  // filter out weex builds by default
  //! 排除weex的代码打包
  builds = builds.filter(b => {
    return b.output.file.indexOf('weex') === -1
  })
}

//! 4. rollup打包
build(builds)

function build(builds) {
  let built = 0 // 当前打包项序号
  const total = builds.length // 需要打包的总次数
  const next = () => {
    buildEntry(builds[built]).then(() => {
      built++ // 打包完成后序号加1
      if (built < total) { // 如果打包序号小于打包总次数，则继续执行next函数
        next()
      }
    }).catch(logError) // 输出错误信息
  }

  next() // 调用next函数
}
//! 打包核心函数 
function buildEntry(config) {
  const output = config.output // 获取config的output配置项
  const { file, banner } = output // 获取output中的file和banner
  const isProd = /(min|prod)\.js$/.test(file) // 判断file是否以main.js结尾，如果是则标记isProd为true
  return rollup.rollup(config) // 执行rollup打包
    .then(bundle => bundle.generate(output)) //将打包的结果生成源码
    .then(({ output: [{ code }] }) => { // 获取打包生成的源码
      if (isProd) { // 判断是否为isProd
        const minified = (banner ? banner + '\n' : '') + terser.minify(code, {
          toplevel: true,
          output: {
            ascii_only: true // 只支持ascii字符
          },
          compress: {
            pure_funcs: ['makeMap'] // 过滤makeMap函数
          }
        }).code // 获取最小化打包的代码
        return write(file, minified, true) // 将代码写入输出路径
      } else {
        return write(file, code)  // 将代码写入输出路径
      }
    })
}

function write(dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report(extra) {  // 输入日志函数
      // path.relative(process.cwd(), dest)) 获取当前命令行路径到最终生成文件的相对路径
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }

    fs.writeFile(dest, code, err => {
      if (err) return reject(err)  // 如果报错则直接调用reject方法
      if (zip) {  // 如果isProd进行gzip测试
        zlib.gzip(code, (err, zipped) => { // 通过gzip对源码进行压缩测试
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')') // 测试成功后获取gzip字符串长度并输出gzip容量
        })
      } else {
        report() // 输出日志
      }
    })
  })
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError(e) {
  console.log(e)
}
// 调用blue()函数生成命令行蓝色的文本
function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
