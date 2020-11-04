import alias from '@rollup/plugin-alias'
import path from 'path'

const pathResolve = p => path.resolve(__dirname, p)

export default {
  input: './src/vue/alias/index.js',
  output: [{
    file: './dist/index-plugin-es.js',
    format: 'es'
  }],
  plugins: [
    alias({
      entries: {
        '@': pathResolve('src')
      }
    })
  ]
}


/* import alias from 'rollup-plugin-alias'
import path from 'path'

const pathResolve = p => path.resolve(__dirname, p)

export default {
  input: './src/vue/alias/index.js',
  output: [{
    file: './dist/index-plugin-es.js',
    format: 'es'
  }],
  plugins: [
    alias({
      entries: {
        '@': pathResolve('src')
      }
    })
  ]
}
 */