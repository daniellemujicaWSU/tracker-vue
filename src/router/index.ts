import { createRouter, createWebHistory } from 'vue-router'
import CampusLoadOverview from '../views/CampusLoadOverview.vue'
import ClassOverview from '../views/ClassOverview.vue'
import History from '../views/LoaHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'campusLoadOverView',
      component: CampusLoadOverview
    },
    {
      path: '/class/:year',
      name: 'classOverview',
      component: ClassOverview,
      props: true
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
  ]
})

export default router
