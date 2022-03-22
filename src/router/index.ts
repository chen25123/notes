import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw, RouteMeta } from 'vue-router'
import type { AppRouter } from './types'

// 引入路由
import DocsFarmework from './module/docs-framework'
import DocsTs from './module/docs-typescript'
import HtmlPage from './module/docs-html'
import UniappPage from './module/docs-uni-app'
import Example from './module/example'

let routesArr: Array<Array<AppRouter>> = [
  DocsFarmework, DocsTs, HtmlPage, UniappPage, Example
]

import HomePage from '@/pages/update-log.vue'
// const HomePage = () => import('@/pages/docs/index.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: '文档'
    }
  }],
  // scrollBehavior
})

// 导航守卫？
router.beforeEach((to, from) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string;
  }
})

function addRoutes(data: Array<Array<AppRouter>>): void {
  for(let i: number = 0; i < data.length; i++) {
    let mod: AppRouter[] = data[i];
    for (let j: number = 0; j < mod.length; j++) {
      let routeExp: AppRouter = mod[j];
      router.addRoute( routeExp as unknown as RouteRecordRaw )
    }
  }
}

addRoutes(routesArr);

export default router;
