<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {
    const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0()

    return {
      isLoading,
      isAuthenticated,
      user,
      login: () => {
        loginWithRedirect({
          appState: {
            targetUrl: self.location.pathname,
            mode: LoginMode.login,
          },
          acr_values: 'Consent_Accepted',
          authorizationParams: {
            acr_values: 'Consent_Accepted',
            redirect_uri: `${self.location.origin}?uiMode=login`,
            ui_locales: 'en',
          },
        })
      },
      createAccount: () => {
        loginWithRedirect({
          appState: {
            mode: 'signup',
          },
          acr_values: 'Consent_Accepted',
          authorizationParams: {
            acr_values: 'Consent_Accepted',
            redirect_uri: `${self.location.origin}/auth-callback?uiMode=signup`,
            screen_hint: 'signup',
            ui_locales: 'en',
          },
        })
      },
    }
  },
}
</script>

<template>
  <h2>Login</h2>
  <button @click="login">Log in</button>
  <button @click="createAccount">Create account</button>
  <div>
    <p v-if="isLoading">Checking authentication...</p>
    <p v-else-if="isAuthenticated">You are logged in as {{ user.name }}</p>
    <p v-else>You are not logged in</p>
  </div>
  <div>
    {{ user }}
  </div>
</template>

<style scoped>
button {
  border: 1px solid;
  padding: 1rem;
  margin-block-end: 1rem;
}
</style>
