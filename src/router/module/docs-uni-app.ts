import type { AppRouter } from '../types'

import uniappHome from '@/pages/docs/uni-app/index.vue'
import uaVmodelPage from '@/pages/docs/uni-app/v-model/index.vue'

const routes: AppRouter[] = [
  {
    name: 'uaHomePage',
    path: '/pages/uniapp/home',
    component: uniappHome,
    meta: {
      title: 'uni-app'
    }
  },
  {
    name: 'uaVmodelPage',
    path: '/pages/uniapp/vModel',
    component: uaVmodelPage,
    meta: {
      title: 'v-model'
    }
  }
]

export default routes