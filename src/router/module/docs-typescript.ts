import type { AppRouter } from '../types'

import tsConfigPage from '@/pages/docs/ts/config/index.vue'
import tsTypesPage from '@/pages/docs/ts/types/index.vue'

// 懒加载
// const tsConfigPage = () => import('@/pages/docs/ts/config/index.vue') 
// const tsTypesPage = () => import('@/pages/docs/ts/types/index.vue')

const routes: AppRouter[] = [
  {
    name: 'tsConfigPage',
    path: '/pages/ts/config',
    component: tsConfigPage,
    meta: {
      title: 'ts配置'
    }
  },
  {
    name: 'tsTypesPage',
    path: '/pages/ts/type',
    component: tsTypesPage,
    meta: {
      title: '接口'
    }
  }
]

export default routes