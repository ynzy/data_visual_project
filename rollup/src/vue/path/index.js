const path = require('path')
// console.log(path.resolve('./dist/index.js'));
// console.log(path.resolve('src', 'vue/path/index.js'));
// console.log(path.resolve('/src', '/vue/path/index.js'));
// console.log(path.resolve('/src', 'vue/path/index.js'));

const absolutePath = path.resolve('src', 'vue/path/index.js')
console.log(path.relative('./', absolutePath));
console.log(path.relative(absolutePath, './'));