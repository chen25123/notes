# vue-router在vue3.0中和之前的一些变化
  by: chenxj25123<br />
  参考[官方文档](https://router.vuejs.org/zh/guide/migration/#new-router-%E5%8F%98%E6%88%90-createrouter)<br />
  1. Vue Router 不再是一个类，而是一组函数。现在你不用再写 new Router()，而是要调用 createRouter；<br />
  2. 创建 history 的方式变化了；<br />
  3. 传递 base 的方式变化了； <br />
  ...容我偷个懒吧，官方文档写的比较详细。

# 遇到的问题

  1. 添加首页路由后，没有显示，控制台报错 Invalid route component at extractComponentsGuards(路由组件无效)，原因是我在createWebHistory('/')这里设置了/，然后在path处又设置了/<br />
  ``` js
  const router = createRouter({
    history: createWebHistory('/'),
    routes: [{
      path: '/',
      component: HomePage,
    }],
  })
  ```
  这两个地方不能同时设置'/',但是当我在createWebHistory 设置'base/'且在 path中也设置'/'，此时又能正常访问(`http://x.x.x.x:8080/base/`)？？？,效果和设置'base'一样<br />

  2. 在modlue中的路由，如何给到正确的格式？
  ``` js
  interface AppRouter {
    path: string;
    component: DefineComponent<{}, {}, any> | (() => Promise<typeof import('*.vue')>) | string;
    name?: string;
    meta: RouteMeta;
    components?: DefineComponent<{}, {}, any>[];
    children?: AppRouter[];
    props?: Record<string, any>;
    fullPath?: string;
  }
  ```

  3. build之后的文件默认输出是 '/assets/**'，因为我的 web服务不是放在根目录，所以打开页面失败<br />
  解决办法： 配置 vite 的打包输出 base: './', 可以变成 './assets/**'

  4. history 模式，设置了 base 为默认层级后，跳转页面导致 url 变化时 刷新页面就404(无法找到页面)<br />
  因为现在没有在web服务器做相对应的配置，加上我用的是 history模式访问的页面，导致 页面的url在跳页之后是 比较好看的 http://xxx.xxx.xx/xx/xx/xx, 这样，刷新之后，由于路径的变化，的确会找不到页面，报404，所以，暂时先用 hash形式的路由吧。<br />
  另外的解决办法是，当404的时候，就去访问index.html。可以在路由中配置。

# 一些思考

  引入路由的方式：<br />
  1. 在index.ts中引入所有的路由配置；一个项目只跑一个spa，不区分打包<br />
  2. 在单个的路由文件中引用index.ts 然后在 main.ts中，use不同的 router，可以配置入口，然后执行不同的项目打包，<br />
  