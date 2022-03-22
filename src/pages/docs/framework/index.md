# 开始
  by: chenxj25123<br />
  我在用的vscode插件
  1. gitlens          // 辅助管理 git
  2. vetur            // 最近打开的文件？？？
  3. import cost      // 显示应用的包的大小，其实没啥卵用吧

## 文件夹和文件命名规范以及目录结构的说明

  文件夹和文件 命名均用小写字母，单词与单词之间以-隔开；<br />
  PS：配置文件及个别特殊文件(比如README.md)除外<br />

  notes <br />
  ├── build _(**vite配置文件夹**)_<br />
  ├── public _(**公共**)_<br />
  ├── src _(**项目主体**)_<br />
  │   ├── assets _(**静态资源**)_<br />
  │   ├── components _(**公共组件**)_<br />
  │   ├── pages _(**业务代码**)_<br />
  │   ├── `main.ts` _(**项目入口ts文件**)_<br />
  ├── `index.html` _(**项目入口,指向 main.ts**)_<br />
  ├── `tsconfig.json` _(**ts配置文件**)_<br />
  ├── `vite.config.js` _(**vite配置文件**)_<br />

## 构建项目

  使用vite构建一个vue3.0的项目，vue3.0的教程里面有相关的描述，这里就不赘述了。<br />
  [Vue官方链接](https://v3.cn.vuejs.org/guide/installation.html#vite)<br />
  npm init vite@latest <project-name> --template vue<br />
  执行成功之后，进入目录，安装依赖，跑起来项目，这中间的过程也不赘述了。官网都讲的很详细。<br /><br />

  然后，执行 npm run dev, 会起一个 web服务。拿到了 http://localhost:4173/ 这样一个地址。<br />

  这里先写一些无关紧要的玩意吧：<br />
  1. vite会默认找 根目录(和配置文件同级)下的index.html作为入口，然后在 index.html里面引入了 入口js；


  npm run preview 执行之后 页面给了 Cannot GET /，， 控制台 报了 GET http://localhost:4173/ 404 (Not Found)。。<br />
  
 ## 配置文件相关

  PS: 因为之前都是使用的webpack，加上想针对预览和打包模式做一些其他处理，所以，仿照 webpack 建了一个build的文件夹，来管理不同场景的配置。<br />

  1. 配置host<br />

  ``` js
  // 在vite.config.js中 引入previewConfig，然后赋值给 preview
  import previewConfig from './build/preview.config.js'
  // https://vitejs.dev/config/
  export default defineConfig({
    preview: previewConfig,
    plugins: [vue()]
  })
  ``` 

## 将项目改造为ts

  1. 将入口文件 src/main.js 重命名为 main.ts，并且将index.html中的main.js 修改成main.ts;<br />
  2. 将app.vue中的 script标签加上 lang='ts';<br />
  3. 在根目录新建tsconfig.json 配置文件,推荐配置项，在vue3.0的文档里面有说明；<br />
  4. 此时 main.ts中引入 ./App.vue 会报错 找不到模块“./App.vue”或其相应的类型声明。解决办法是 在 src目录下新建 shims-vue.d.ts，在里面添加vue文件的声明；vue3.0和vue2.0的写法还有区别；<br />
  5. 此时 新的问题又来了，还是在main.ts中，createApp函数的参数报错，这里 给tsconfig加入 "skipLibCheck": true, 屏蔽类型检测，就好了；<br />
  
## css的选择

  因为没有用过postcss，所以这里用一下<br />
  1. [postcss](https://github.com/postcss/postcss)；<br />
  2. 安装 postcss npm i postcss --save-dev；<br />
  3. 与package.json同级目录创建postcss.config.js文件；<br />
  4. 安装配置文件中使用到的插件；<br />
  5. style标签加上 lang="postcss"；<br />
  PS: postcss 的联想功能特别的稀烂，需要安装 vscode 插件，这里我用的 PostCSS Intellisense；<br />

## 入口文件

  Q：入口文件处 import { createApp } from 'vue'; createApp(App).mount('#app'); 为何这样写?<br />
  A: 

## 加入vue-router
  vue3.0的官网说，还是建议使用 vue-router<br /><br />

  建立一个 router/index.js 在这里对路由进行一个集中的处理，具体看文件本身。<br />
  1. 添加滚动行为，参考 [vue-router 官网](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html) scrollBehavior；<br />
  2. 路由守卫的配置；<br />
  3. 一些权限管理，比如必须登录才可以访问，此页面是否已经下架等操作。<br />

## 在项目中使用md

  vite社区有一个vite-plugin-md2vue 的插件，可以将markdown模块以vue3组件导出，注意只支持vue3！<br />
  [vite-plugin-md2vue](https://github.com/WangXueZhi/vite-plugin-md2vue/blob/main/README_CN.md)<br />
  npm i vite-plugin-md2vue --save-dev<br />
  安装完依赖之后，去vite的配置文件中，添加plugins
  ``` js
  // vite.config.js
  import { defineConfig } from "vite";
  import vitePluginMd2Vue from "vite-plugin-md2vue";

  export default defineConfig({
    ...
    plugins: [vue(), vitePluginMd2Vue()]
  });
  ```