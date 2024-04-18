import './style.css'

import App from '@/App.vue'
import { applyCustomInterceptors } from './setupApi'
import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import router from './router'

const auth0Config = createAuthConfig()

console.log(auth0Config)

const app = createApp(App).use(createAuth0(auth0Config)).use(router)

app.mount('#app')

applyCustomInterceptors()

function createAuthConfig() {
  return {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    domainUrl: import.meta.env.VITE_AUTH0_DOMAIN_URL,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    cacheLocation: 'localstorage',
    useRefreshTokens: true,
    useRefreshTokensFallback: true,
    authorizationParams: {
      scope: import.meta.env.VITE_AUTH0_SCOPE,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      redirect_uri: `${self.location.origin}/${
        import.meta.env.VITE_AUTH0_CALLBACK_URL
      }`,
    },
  }
}
