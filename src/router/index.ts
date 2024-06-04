import { createRouter, createWebHistory } from 'vue-router'
import OverView from '@/views/OverView.vue'
import UploadLogs from '@/views/UploadLogs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OverView
    },
    {
      path: '/uploadlogs',
      name: 'uploadlogs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/UploadLogs.vue')
    }
  ]
})

export default router
