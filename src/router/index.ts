import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import OverView from '@/views/OverView.vue'
import StatusUpdates from '@/views/StatusUpdates.vue'
import UploadLogs from '@/views/UploadLogs.vue'
import Map from '@/views/Map.vue'
import Upload from '@/views/Upload.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/overview',
          name: 'Overview',
          component: OverView,
          meta: {
            breadcrumb: 'Overview'
          }
        }
      ]
    },
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/upload-logs',
          name: 'Upload Logs',
          component: UploadLogs,
          meta: {
            breadcrumb: 'Upload Logs'
          }
        }
      ]
    },
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/status-updates',
          name: 'Status Updates',
          component: StatusUpdates,
          meta: {
            breadcrumb: 'Status Updates'
          }
        }
      ]
    },
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/map',
          name: 'Map',
          component: Map,
          meta: {
            breadcrumb: 'Map'
          }
        }
      ]
    },
    {
      path: '/',
      component: AuthLayout,
      children: [
        {
          path: '/upload',
          name: 'Upload',
          component: Upload,
          meta: {
            breadcrumb: 'Upload'
          }
        }
      ]
    }
  ]
})

export default router
