import { DefineComponent } from 'vue'
import { RouteMeta } from 'vue-router'

export interface AppRouter {
  path: string;
  component: DefineComponent<{}, {}, any> | (() => Promise<typeof import('*.vue')>) | string;
  name?: string;
  meta?: RouteMeta;
  components?: DefineComponent<{}, {}, any>[];
  children?: AppRouter[];
  props?: Record<string, any>;
  fullPath?: string;
}
