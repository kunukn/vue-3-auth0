<template>
  <div>
    <div>
      <h1>External API</h1>
      <p>
        Call an external API by clicking the button below. This will call the
        external API using an access token, and the API will validate it using
        the API's audience value.
      </p>

      <button @click="callApi">Call API</button>
    </div>

    <div>
      <h6>Result</h6>
      <pre>{{ apiMessage }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'

const localBaseBusinessApi = 'https://localhost:44394'

export default {
  setup() {
    const auth0 = useAuth0()
    const apiMessage = ref()
    return {
      apiMessage,
      async callApi() {
        const accessToken = await auth0.getAccessTokenSilently()
        try {
          const response = await fetch(`${localBaseBusinessApi}/v2/users/me`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          const data = await response.json()
          apiMessage.value = data
        } catch (e: any) {
          apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
        }
      },
    }
  },
}
</script>
