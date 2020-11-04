/* @flow */
import { square } from '@/vue/alias/lib' // 通过别名导入本地模块
import { random } from 'sam-test-data' // 导入es模块
import { a as cjsA } from 'sam-test-data-cjs' // 导入commonjs模块

const a: number = 1 // 通过flow进行类型检查
let b: number = 2 // 使用ES6新特性：let
const c: string = '😀' // 加入非ascii字符
if (__SAM__) { // 使用replace字符串
  console.log(`__SAM__,${a},${b},${c}`) // 使用ES6新特性``模板字符串
}
export default {
  a, b, c, d: __SAM__, square, random, cjsA
} // 导出ES模块