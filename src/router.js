import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from './pages/AboutPage.vue'
import CallbackPage from './pages/CallbackPage.vue'
import HomePage from './pages/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/auth-callback', component: CallbackPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router