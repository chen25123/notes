# 关于在项目中渲染md文件到HTML
  by: chenxj25123<br />
  首先使用了vite官方推荐的 vite-plugin-md2vue(版本1.0.0)，放上去就能用哈，氮素，他有缺陷：<br />
  1. 没有md样式，需要自己写？？？<br />
  2. 代码高亮的css依旧需要引入，没有实现一次，全局无忧？？？<br />

  为了解决问题一，找了一个markdown.css直接放到了 `/style/md.css` 中，然后在main.ts里面引用该css。<br />
  PS：个人挺喜欢 vuepress 的那种样式风格的。<br />

  