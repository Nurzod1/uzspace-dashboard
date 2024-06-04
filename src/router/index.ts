import { createRouter, createWebHistory } from 'vue-router'
import OverView from '@/views/OverView.vue'
import StatusUpdates from '@/views/StatusUpdates.vue'
import UploadLogs from '@/views/UploadLogs.vue'
import Map from '@/views/Map.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/overview',
      name: 'overview',
      component: OverView,
      meta: {
        breadcrumb: 'Overview'
      }
    },
    {
      path: '/upload-logs',
      name: 'uploadlogs',
      component: UploadLogs,
      meta: {
        breadcrumb: 'Upload Logs'
      }
    },
    {
      path: '/status-updates',
      name: 'status-updates',
      component: StatusUpdates,
      meta: {
        breadcrumb: 'Status Updates'
      }
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
      meta: {
        breadcrumb: 'Map'
      }
    }
  ]
})

export default router
