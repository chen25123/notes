import type { AppRouter } from '../types'

import exaVmodelPage from '@/pages/example/v-model/index.vue'

const routes: AppRouter[] = [
  {
    name: 'exampleVmodel',
    path: '/pages/example/vmodel',
    component: exaVmodelPage,
    meta: {
      title: 'v-model'
    }
  }
]

export default routes