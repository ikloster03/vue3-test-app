import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Help from './pages/Help.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/help',
      component: Help,
      name: 'help',
    },
  ],
})

export default router
