const fs = require('fs')
const zlib = require('zlib')

fs.readFile('./dist/index-cjs.js', (err, code) => {
  if (err) return
  console.log('源文件容量:', code.toString().length);
  zlib.gzip(code.toString(), (err, zipped) => {
    if (err) return
    console.log('gzip压缩后容量：' + zipped.length);
  })
})