import { createRouter, createWebHistory } from 'vue-router'

import ApiPage from '@/pages/ApiPage.vue'
import AuthCallbackPage from '@/pages/AuthCallbackPage.vue'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/api', component: ApiPage },
  { path: '/auth-callback', component: AuthCallbackPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router