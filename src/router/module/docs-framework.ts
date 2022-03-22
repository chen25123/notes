import type { AppRouter } from '../types'

import frameworkPage from '@/pages/docs/framework/index.vue'
import vueRouterPage from '@/pages/docs/framework/router/index.vue'
import markdownPage from '@/pages/docs/framework/markdown/index.vue'
// const vueRouterPage = () => import('@/pages/docs/framework/router/index.vue') // 懒加载

const routes: AppRouter[] = [
  {
    name: 'frameworkPage',
    path: '/pages/framework',
    component: frameworkPage,
    meta: {
      title: '框架说明'
    }
  },
  {
    name: 'vueRouterPage',
    path: '/pages/router',
    component: vueRouterPage,
    meta: {
      title: '路由配置'
    }
  },
  {
    name: 'markdownPage',
    path: '/pages/markdown',
    component: markdownPage,
    meta: {
      title: 'md2html'
    }
  }
]
// router.addRoute(routes as unknown as RouteRecordRaw)

export default routes