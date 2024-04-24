import './style.css'

import App from '@/App.vue'
import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import { createRouter } from './router'

const auth0Config = createAuthConfig()

console.log(auth0Config)

const app = createApp(App)

// Router before Auth0
// https://developer.auth0.com/resources/guides/spa/vue/basic-authentication#configure-a-vue-js-authentication-plugin
app.use(createRouter(app)).use(createAuth0(auth0Config))

app.mount('#app')

export function createAuthConfig() {
  return {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    domainUrl: `https://${import.meta.env.VITE_AUTH0_DOMAIN}`,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    cacheLocation: 'localstorage',
    useRefreshTokens: true,
    useRefreshTokensFallback: true,
    authorizationParams: {
      scope: import.meta.env.VITE_AUTH0_SCOPE,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      redirect_uri: `${self.location.origin}${
        import.meta.env.VITE_AUTH0_CALLBACK_URL
      }`,
    },
  }
}
