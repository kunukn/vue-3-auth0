import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '@/pages/AboutPage.vue'
import ApiPage from '@/pages/ApiPage.vue'
import CallbackPage from '@/pages/CallbackPage.vue'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/about', component: AboutPage },
  { path: '/api', component: ApiPage },
  { path: '/auth-callback', component: CallbackPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router