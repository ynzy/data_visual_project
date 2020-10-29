export default {
  input: './src/main.js',
  output: [{
    file: './dist/index-cjs.js',
    format: 'cjs',
    banner: '// welcome to imooc.com',
    footer: '// powered by sam'
  }, {
    file: './dist/index-es.js',
    format: 'es',
    banner: '// welcome to imooc.com',
    footer: '// powered by sam'
  }]
}