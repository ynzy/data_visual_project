import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import flow from 'rollup-plugin-flow-no-whitespace'
import { terser } from 'rollup-plugin-terser'
import alias from 'rollup-plugin-alias'
import path from 'path'

const pathResolve = p => path.resolve(__dirname, p)

export default {
  input: './src/vue/replace/index.js',
  output: [{
    file: './dist/index-plugin-es.js',
    format: 'es'
  }],
  plugins: [
    replace({
      __SAM__: true
    }),
    flow(),
    buble(),
    alias({
      entries: {
        '@': pathResolve('src')
      }
    }),
    commonjs(),
    resolve(),
    terser({
      output: {
        ascii_only: true // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ['console.log'] // 去掉console.log函数
      }
    }),
  ]
}