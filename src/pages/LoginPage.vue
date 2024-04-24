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
            targetUrl: self.location.pathname, // Take me there after login.
            mode: 'login', // Custom thing for me, you properly don't need this.
          },
          authorizationParams: {
            redirect_uri: `${self.location.origin}?uiMode=login`, // These query strings are custom for me.
            ui_locales: 'en', // Custom thing for me, you properly don't need this.
          },
        })
      },
      createAccount: () => {
        loginWithRedirect({
          appState: {
            mode: 'signup', // Custom thing for me, you properly don't need this.
          },
          authorizationParams: {
            redirect_uri: `${self.location.origin}/auth-callback?uiMode=signup`, // These query strings are custom for me.
            screen_hint: 'signup', // https://auth0.com/docs/authenticate/login/auth0-universal-login/universal-login-vs-classic-login/universal-experience#signup
            ui_locales: 'en', // Custom thing for me, you properly don't need this.
          },
        })
      },
    }
  },
}
</script>

<template>
  <h2>Login</h2>
  <div class="buttons">
    <button @click="login">Log in</button>
    <button @click="createAccount">Create account</button>
  </div>
</template>

<style scoped>
button {
  margin-block-end: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}
</style>
