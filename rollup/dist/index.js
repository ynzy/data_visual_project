const fs = require('fs')
// 判断是否存在目录，生成对应的目录
/* const exists = fs.existsSync('./dist')
if (exists) {
  console.log('dist目录已存在');
} else {
  console.log('dist目录不存在');
  fs.mkdirSync('./dist')
} */

// 读取文件
/* fs.readFile('./dist/index-cjs.js', (err, file) => {
  if (!err) console.log(file.toString());
}) 
const file = fs.readFileSync('./dist/index-cjs.js')
console.log(file.toString());
*/

// 写入文件
const code = fs.readFileSync('./src/vue/fs/index.js')
fs.writeFileSync('./dist/index.js', code)const fs = require('fs')
// 判断是否存在目录，生成对应的目录
/* const exists = fs.existsSync('./dist')
if (exists) {
  console.log('dist目录已存在');
} else {
  console.log('dist目录不存在');
  fs.mkdirSync('./dist')
} */

// 读取文件
/* fs.readFile('./dist/index-cjs.js', (err, file) => {
  if (!err) console.log(file.toString());
}) 
const file = fs.readFileSync('./dist/index-cjs.js')
console.log(file.toString());
*/

// 写入文件
const code = fs.readFileSync('./src/vue/fs/index.js')
fs.writeFileSync('./dist/index.js', code, { flag: 'a' })