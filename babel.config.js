/*babel.config.js  */

const plugins = [
  [
    /* 配置vant 按需加载 */
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }
  ]
]

// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins: plugins,
  presets: ['@vue/cli-plugin-babel/preset']
}
