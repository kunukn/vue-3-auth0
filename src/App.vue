<script>
import { useAuth0 } from '@auth0/auth0-vue'
import { createAuthConfig } from './main.js'
import { ref, watch } from 'vue'

export default {
  setup() {
    const { logout, isLoading, isAuthenticated, user, getAccessTokenSilently } =
      useAuth0()

    let token = ref()

    if (isAuthenticated) {
      getAccessTokenSilently().then((t) => {
        token.value = t
      })
    }

    watch(isAuthenticated, (newVal) => {
      if (newVal) {
        getAccessTokenSilently().then((t) => {
          token.value = t
        })
      }
    })

    return {
      isLoading,
      isAuthenticated,
      user,
      token,
      config: createAuthConfig(),
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clickLogout: () => {
        logout({
          logoutParams: {
            returnTo: self.location.origin + '/login',
          },
        })
      },
    }
  },
}
</script>

<template>
  <h1>Vue 3 + Auth0 app</h1>
  <p class="id-info">domain: {{ domain }}</p>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <p>
    Ensure the url match the one configured in Auth0 settings, i.e. correct
    port.
  </p>
  <nav>
    <RouterLink v-if="!isAuthenticated" to="/login">Login</RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="isAuthenticated" to="/api">API</RouterLink>
    <div class="logout">
      <button v-if="isAuthenticated" @click="clickLogout">Logout</button>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
  <div>
    <p>Is logged in: {{ isAuthenticated }}</p>
    <p>Is loading: {{ isLoading }}</p>
    <p>User:</p>
    <pre>{{ user }}</pre>
  </div>
  <hr />
  <p>Token: {{ token }}</p>
  <hr />
  <p>Config:</p>
  <pre>{{ config }} </pre>
</template>

<style scoped>
nav {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 1rem;
}

button {
  border: 1px solid;
  padding: 4px;
}

.logout {
  margin-left: auto;
}

pre {
  font-size: 14px;
}
</style>
