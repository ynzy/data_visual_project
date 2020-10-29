export function comment() {
  if (arguments.length === 0) {
    return // 如果参数为0直接返回
  }
  let maxlength = 0
  for (let i = 0; i < arguments.length; i++) {
    const length = arguments[i].toString().length
    maxlength = length > maxlength ? length : maxlength // 获取最长的参数
  }
  maxlength = maxlength === 0 ? maxlength : maxlength + 1 // 在最长参数长度上再加1，为了美观
  let seperator = ''
  for (let i = 0; i < maxlength; i++) {
    seperator += '=' // 根据参数长度生成分隔符
  }
  const c = []
  c.push('/**\n') // 添加注释头
  c.push(' * ' + seperator + '\n') // 添加注释分隔符
  for (let i = 0; i < arguments.length; i++) {
    c.push(' * ' + arguments[i] + '\n') // 加入参数内容
  }
  c.push(' * ' + seperator + '\n') // 添加注释分隔符
  c.push(' **/') // 添加注释尾
  return c.join('') // 合并参数为字符串
}