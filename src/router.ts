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
  // {
  //   path: '/part',
  //   name: 'Part',
  //   component: async () => await import('@/views/PartView.vue'),
  // },
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
  // {
  //   path: '/order',
  //   name: 'Order',
  //   component: async () => await import('@/views/OrderView.vue'),
  // },
  // {
  //   path: '/order/:id',
  //   name: 'OrderEdit',
  //   component: async () => await import('@/views/OrderEditView.vue'),
  //   props: true,
  // },
  // {
  //   path: '/order/create',
  //   name: 'OrderCreateView',
  //   component: async () => await import('@/views/OrderCreateView.vue'),
  // },
  // {
  //   path: '/order/schedule',
  //   name: 'OrderSchedule',
  //   component: async () => await import('@/views/ScheduleView.vue'),

  // },
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
