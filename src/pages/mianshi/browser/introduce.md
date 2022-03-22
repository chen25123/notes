# 浏览器运行原理

  [参考文章:https://zhuanlan.zhihu.com/p/47407398](https://zhuanlan.zhihu.com/p/47407398)

  浏览器的每个页面就相当于一个进程
  以谷歌为例，
  首先谷歌有一个顶层的进程，负责协调其他进程之间的工作，他们之间通过IPC管道来通信，谷歌的 进程包括
  1. 谷歌顶层进程，负责协调各个进程的工作
  2. tab进程，谷歌中，每个tab就是一个单独的进程
  3. 插件管理进程
  4. gpu进程

  <img src="../../../assets/images/browser/process.jpg" />

  谷歌在67以上的版本中，同一个tab里面打开iframe 的时候，将会开启一个新的 进程来管理 iframe的页面。

## 一： 当用户输入一个url的时候发生了什么

  1. 解析url，拿到域名对应的dns
  2. 建立 tsl/ssl/tcp 连接
  3. 发送http请求
  4. 接受服务器响应结果
  5. 通过content-type判断资源类型
  6. 如果是html则渲染，是文件则下载，部分浏览器支持在线浏览 pdf和word
  7. 同时，浏览器更新 工具栏状态，比如(加载中的转圈，history 前进后退按钮等)

## 二： render process 是如何工作的

  首先，一个 render process 是包含多个线程的
  1. 主线程 main thread
  2. 工作线程 worker thread
  3. 排版线程 Compositor thread
  4. 光栅线程 Raster thread

  加载完 html之后，浏览器 渲染线程会处理 dom和css，生成dom tree，然后通过dom tree 生成 布局树，生成布局树之后，处理层，合并层，最后将层丢给gpu显示到屏幕上。
  值得一提的是，有些属性可以 指定将某元素看做单独的一层，交由gpu处理，合理的使用这一技巧，可以提高渲染性能。
  某些属性： 
  1. 3D效果， 旋转，变形(放大缩小)，transfrom位置便宜， 
  2. will-change
