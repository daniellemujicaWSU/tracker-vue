import { createRouter, createWebHistory } from 'vue-router'
import CampusLoadOverview from '../views/CampusLoadOverview.vue'
import ClassOverview from '../views/ClassOverview.vue'
// import LoaHistory from '../views/LoaHistory.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/loa/overview',
      name: 'campusLoadOverView',
      component: CampusLoadOverview,
      alias: ['/loa', '/']
    },
    {
      path: '/loa/class/:year',
      name: 'classOverview',
      component: ClassOverview,
      props: true
    },
    // {
    //   path: '/loa/history',
    //   name: 'history',
    //   component: LoaHistory
    // },
  ],
  linkActiveClass : 'text-pacific-blue border-b-4 border-pacific-blue transition',
})

export default router
