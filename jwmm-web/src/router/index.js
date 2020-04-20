import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/panel'
  },
  {
    path: '/panel',
    component: () => import('@/views/index'),
    children: [
      {
        path: '',
        name: 'Summary',
        component: () => import('@/views/Summary')
      },
      {
        path: 'meeting',
        name: 'Meeting',
        component: () => import('@/views/meeting/')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
