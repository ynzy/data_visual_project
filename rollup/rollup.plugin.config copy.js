import { comment } from './comment-helper-es'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'
import buble from "rollup-plugin-buble";
import alias from "rollup-plugin-alias"
import path from "path";

const pathResolve = p => path.resolve(__dirname, p)

export default {
  input: './src/vue/alias/index.js',
  output: [{
    file: './dist/index-plugin-cjs.js',
    format: 'cjs',
    // banner: comment('welcome to imooc.com', 'this is a rollup test project'),
    // footer: comment('powered by sam', 'copyright 2018')
  }, {
    file: './dist/index-plugin-es.js',
    format: 'es',
    // banner: comment('welcome to imooc.com', 'this is a rollup test project'),
    // footer: comment('powered by sam', 'copyright 2018')
  }],
  plugins: [
    // resolve(),
    // commonjs(),
    // babel(),
    // json(),
    // uglify(),
    // buble(),
    alias({
      '@': pathResolve('src')
    })
  ],
  // external: ['sam-test-data']
}