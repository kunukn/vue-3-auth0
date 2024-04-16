import './style.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import router from './router'

const auth0Config = createAuthConfig()

console.debug(auth0Config)

const app = createApp(App).use(createAuth0(auth0Config)).use(router)

app.mount('#app')

function createAuthConfig() {
  return {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirectUri: `${self.location.origin}/${
      import.meta.env.VITE_AUTH0_CALLBACK_URL
    }`,
    scope: import.meta.env.VITE_AUTH0_SCOPE,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    cacheLocation: 'localstorage',
    useRefreshTokens: true,
    useRefreshTokensFallback: true,
  }
}
