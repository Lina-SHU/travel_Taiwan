import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/theme/:id',
    component: () => import('../views/Theme.vue')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../views/View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
