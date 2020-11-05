const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/datav.min.js')
const outputEsPath = path.resolve(__dirname, './dist/datav.es.min.js')

module.exports = {
  input: inputPath,
  output: [{
    file: outputUmdPath,
    format: 'umd',
    name: 'datav',
    globals: {
      vue: 'vue'
    }
  }, {
    file: outputEsPath,
    format: 'es',
    name: 'datav'
  }],
  plugins: [
    resolve(),
    vue(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    json(),
    postcss(),
    terser(),
  ],
  external: ['vue']
}