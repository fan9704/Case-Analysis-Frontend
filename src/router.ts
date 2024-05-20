import { useGlobal } from '@/store';
import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';

/** Router Rules */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    // component: async () => await import('@/views/index/IndexView.vue'),
    component: async () => await import('@/views/case/IndexView.vue'),
  },
  {
    path: '/case/:id',
    name: 'CaseView',
    component: async () => await import('@/components/case/case.vue'),
    props: true,
  },
  {
    path: '/judge',
    name: 'Judge',
    component: async () => await import('@/views/judge/IndexView.vue'),
  },
  {
    path: '/pathology',
    name: 'Pathology',
    component: async () => await import('@/views/pathology/IndexView.vue'),
  },
  {
    path: '/pathology/:id',
    name: 'PathologyView',
    component: async () => await import('@/views/pathology/SingleView.vue'),
    props: true,
  },
]


/** Vue Router */
const router: Router = createRouter({
  /**
   * History Mode
   *
   * @see {@link https://router.vuejs.org/guide/essentials/history-mode.html }
   */
  history: createWebHistory(import.meta.env.BASE_URL), // createWebHashHistory(import.meta.env.BASE_URL)
  routes,
});

// Global before guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards}

// Global After Hooks
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks}
router.afterEach(() => {
  const globalStore = useGlobal();
  // Hide Loading
  globalStore.setLoading(false);
});

/*
const scrollBehavior = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  savedPosition: RouteLocation
): Promise<any> => {
  let scrollpos = {};
  if (to.hash) {
    scrollpos = {
      el: to.hash,
      behavior: 'smooth',
    };
  } else if (savedPosition) {
    scrollpos = savedPosition;
  } else {
    scrollpos = { top: 0 };
  }
  return await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(scrollpos);
    }, 600);
  });
};
*/

export default router;
