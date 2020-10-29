const rollup = require('rollup')
const inputOptions = require('./rollup-input-options')
const outputOptions = require('./rollup-output-options')

async function rollupBuild(input, output) {
  const bundle = await rollup.rollup(input) // 根据input配置进行打包
  console.log(`正在生成：${output.file}`)
  await bundle.write(output) // 根据output配置输出文件
  console.log(`${output.file}生成成功！`)
}

(async function () {
  for (let i = 0; i < outputOptions.length; i++) {
    await rollupBuild(inputOptions, outputOptions[i])
  }
})()