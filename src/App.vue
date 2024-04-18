<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {
    const { logout, isLoading, isAuthenticated, user } = useAuth0()

    return {
      isLoading,
      isAuthenticated,
      user,
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
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink v-if="!isAuthenticated" to="/login">Login</RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="isAuthenticated" to="/api">API</RouterLink>
    <RouterLink to="/about">About</RouterLink>
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
    <pre>{{ user }}</pre>
  </div>
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
