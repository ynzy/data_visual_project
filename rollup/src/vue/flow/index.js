/* @flow */ // 指定该文件flow检查对象
function square(n: number): number { // square的参数必须为number类型，返回值必须为number类型
  return n * n
}

console.log(square('2'))