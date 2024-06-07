import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import OverView from '@/views/OverView.vue'
import StatusUpdatesView from '@/views/StatusUpdatesView.vue'
import UploadLogsView from '@/views/UploadLogsView.vue'
import MapView from '@/views/MapView.vue'
import UploadView from '@/views/UploadView.vue'

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
          component: UploadLogsView,
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
          component: StatusUpdatesView,
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
          component: MapView,
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
          component: UploadView,
          meta: {
            breadcrumb: 'Upload'
          }
        }
      ]
    }
  ]
})

export default router
