<script>
import { useAuth0 } from '@auth0/auth0-vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

export default {
  setup() {
    const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0()

    return {
      isLoading,
      isAuthenticated,
      user,
    }
  },
}
</script>

<template>
  <h2>Home</h2>
  <RouterLink to="/login">Login</RouterLink>
  <div>
    <p v-if="isLoading">Checking authentication...</p>
    <p v-else-if="isAuthenticated">You are logged in as {{ user.name }}</p>
    <p v-else>You are not logged in</p>
  </div>
  <div>
    {{ user }}
  </div>
</template>
