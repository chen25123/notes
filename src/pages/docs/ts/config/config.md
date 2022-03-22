# 配置
  by: chenxj25123<br />
  关于ts的一些配置上的问题：<br />

  1. 如果报错，找不到对应的模块怎么办？<br />
  这个问题常见在使用 import 引入一些文件的时候出现，比如 vue、md、sass等<br />
  解决办法：<br />
  ``` js
  // 先在全局src跟目录先，新建一个*.d.ts 的文件，一般叫 shims-**.d.ts， 我这里就是 shims-type.d.ts
  // 然后加入配置
  declare module '*.文件后缀' {
    export default 文件类型
  }
  // 以下以vue文件和md文件为例子
  declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  declare module '*.md' {
    const mdClass: any
    export default mdClass
  }
  // 然后还需要在ts配置文件中加入我们声明的文件
  // tsconfig.ts
  // 配置需要校验的文件
  "include": [
    "src/**/*.ts",
    "src/**/*.vue",
    "src/**/*.md"
  ],
  ```