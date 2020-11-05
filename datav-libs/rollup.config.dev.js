const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')


const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/datav.js')
const outputEsPath = path.resolve(__dirname, './dist/datav.es.js')

module.exports = {
  input: inputPath,
  output: [{
    file: outputUmdPath,
    format: 'umd',
    name: 'datav',
    globals: {
      vue: 'Vue'
    }
  }, {
    file: outputEsPath,
    format: 'es',
    name: 'datav'
  }],
  //! 注意插件加载顺序
  plugins: [
    resolve(),
    vue(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,       // 使plugin-transform-runtime生效
    }),
    commonjs(),
    json(),
    postcss()
  ],
  external: ['vue']
}