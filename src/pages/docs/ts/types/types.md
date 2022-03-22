# interface 和 type
  by: chenxj25123<br />
## 如何定义全局接口

  在src根目录下新建一个types.ts的文件夹，竟然就自动给匹配了？都没有经过import，感觉不是很靠谱

  1. 导出接口 一个问题？
  ``` js
  // types.ts
  // export interface AppRouter {
  //   age: number
  // }
  // export interface Atest {
  //  age: number
  // }
  // 引用 *.vue
  // import { AppRouter, Atest } from 'types.ts'
  // 额外的思考题：
  // 如何使用 export default 导出接口呢？能不能，如果能，要怎么做，如果不能，为什么？
  // export default {
  //   AppRouter,
  //   Atest
  // };
  // 以上是失败的，暂时没有好的想法
  ```