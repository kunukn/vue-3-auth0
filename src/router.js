import { createRouter, createWebHistory } from 'vue-router'

import AboutView from './pages/AboutView.vue'
import HomeView from './pages/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router