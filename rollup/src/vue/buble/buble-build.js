const buble = require('buble')
const fs = require('fs')
const path = require('path')

const codePath = path.resolve('./src/vue/buble/index.js')
const file = fs.readFileSync(codePath)
const code = file.toString()
const result = buble.transform(code)
console.log(result.code);