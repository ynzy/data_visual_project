'use strict';

var a = 1;
var b = 2;
{ // 使用replace值true，注意这个值没有定义，如果直接运行会报错
  console.log(("true," + a + "," + b + "," + c)); // 使用true，打包时会被替换
}
