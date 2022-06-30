import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../components/Main.vue'),
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../components/Modal.vue'),
  },
  {
    path: '/market',
    name: 'Market',
    component: () => import('../components/Market.vue'),
  },
  {
    path: '/:pathMach(.*)*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
