# 常用的loader

  url-loader：把文件输出到文件夹中，代码中可以通过相对的url去访问该文件， 可以设置阈值，超过阈值打包为文件，小于阈值，转base64，多用于图片；
  babel-loader: 将es6转为es5；
  vue-loader：将*.vue 单文件组件转化成js；

# 常用 plugins

  html-webpack-plugin： 简化 HTML 文件创建 (依赖于 html-loader)；
  mini-css-extract-plugin 或者 extract-text-webpack-plugin： 分离样式文件，提取为单独的css文件；

# loader 和 plugins 的区别

  loader： 由于webpack只能识别js和json，所以需要loader进行翻译之后给webpack使用，

  plugins：更加偏向于向webpack注入某个功能，来完善webpack或者说实现一些 webpack所不具备的能力。

  个人理解是， loader 的作用是 吧一些webpack无法识别的文件转化为 js模块，，应该是发生在 webpack构建 依赖图的阶段，而 plugins 是 webpack 将 依赖图打包成文件的时候发生作用。

# webpack的生命周期

  来吧看图，[网上拿来的图片,原地址：](https://www.cnblogs.com/mengfangui/p/9936277.html)
  <img :src="@/assets/images/webpack_life.jpg" alt="foo" />

  大致上
  1. 读取参数以及配置
  2. 找到入口，编译模块
  3. 生成 compiler 以及 compilation(plugins主要就是用在这里)
  4. 生成文件，输出文件

# source map
  source map 的作用是代码映射回源代码，在开发阶段，如果代码报错，可以通过 source map知道错误发生在什么位置。


# 如果面试官问起 webpack

  1. 目前对webpack只有比较浅的了解， webpack是一个打包构建工具，它 首先读取配置文件以及参数，然后生成compiler对象，然后通过入口开始编译模块，生成依赖图，在这个阶段 loader开始工作，将一些webpack无法识别的 文件转换为 js模块，供 webpack使用，
     然后根据依赖图以及插件配置将模块打包成文件输出。

# 一个插件的实例

  compiler 暴露了和 Webpack 整个生命周期相关的钩子;
  compilation 暴露了与模块和依赖有关的粒度更小的事件钩子;

  假设我们在md文档中放一个 有一些 公共的字符串是需要被替换的， 比如 `'process.env'`

  ``` js
    class replaceStr {
      apply(compiler) {}
    }
  ```
