const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify').uglify

module.exports = {
  input: './src/plugin/main.js',
  plugins: [
    json(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules' // 仅处理node_modules内的库
      }
    }),
    babel({
      exclude: 'node_modules/**' // 排除node_modules
    }),
    commonjs(),
    uglify() // 代码压缩
  ]
}