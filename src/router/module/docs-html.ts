import type { AppRouter } from '../types'

import cssPage from '@/pages/docs/css/index.vue'
import jsPage from '@/pages/docs/js/index.vue'
import erudaPage from '@/pages/docs/tools/eruda/index.vue'
// const vueRouterPage = () => import('@/pages/docs/framework/router/index.vue') // 懒加载

const routes: AppRouter[] = [
  {
    name: 'cssHtmlPage',
    path: '/pages/cssHtml',
    component: cssPage,
    meta: {
      title: 'css相关的demo'
    }
  },
  {
    name: 'jsHtmlPage',
    path: '/pages/jsHtml',
    component: jsPage,
    meta: {
      title: 'js相关的demo'
    }
  },
  {
    name: 'erudaPage',
    path: '/pages/erudaPage',
    component: erudaPage,
    meta: {
      title: 'eruda调试神器'
    }
  }
]
// router.addRoute(routes as unknown as RouteRecordRaw)

export default routes