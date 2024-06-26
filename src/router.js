import { createRouter as createVueRouter, createWebHistory } from 'vue-router'

import ApiPage from '@/pages/ApiPage.vue'
import AuthCallbackPage from '@/pages/AuthCallbackPage.vue'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import { createAuthGuard } from '@auth0/auth0-vue'

export function createRouter(app) {
  return createVueRouter({
    routes: [
      { name: 'home', path: '/', component: HomePage },
      { name: 'login', path: '/login', component: LoginPage },
      {
        name: 'api',
        path: '/api',
        component: ApiPage,
        beforeEnter: createAuthGuard(app),
      },
      { name: 'callback', path: '/auth-callback', component: AuthCallbackPage },
    ],
    history: createWebHistory(),
  })
}
