module.exports = {
  plugins: [
    require('autoprefixer'), // 插件添加了 vendor 浏览器前缀，它使用 Can I Use 上面的数据。
    require('postcss-nested') // 嵌套
  ]
}