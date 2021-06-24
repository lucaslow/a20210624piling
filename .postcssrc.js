// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions'
      ]
    },
    'postcss-pxtorem': {
      rootValue: 37.5, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ['*'],
      unitPrecision: 5,  //保留rem小数点多少位
      minPixelValue: 12 //px小于12的不会被转换
    }
  }
}
