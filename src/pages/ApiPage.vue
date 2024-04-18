<template>
  <div>
    <div>
      <h1>External API</h1>
      <p>
        Call an external API by clicking the button below. This will call the
        external API using an access token, and the API will validate it using
        the API's audience value.
      </p>
      <div class="buttons">
        <button @click="callAppSettingsApi">AppSettings</button>
        <button @click="callMeApi">Me</button>
      </div>
    </div>

    <div>
      <h6>Result</h6>
      <pre>{{ apiMessage }}</pre>
      <hr />
      <p>{{ token }}</p>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'
import axios from 'axios'

export const localBaseApi = 'https://localhost:44394'

export default {
  setup() {
    const auth0 = useAuth0()
    const apiMessage = ref()
    const token = ref()
    return {
      apiMessage,
      token,
      async callAppSettingsApi() {
        apiMessage.value = ''
        token.value = ''
        const accessToken = await auth0.getAccessTokenSilently()
        token.value = accessToken
        try {
          const url = `${localBaseApi}/appsettings`

          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              DEBUG_CURRENT_DATE: '',
            },
          })

          apiMessage.value = response.data
        } catch (e) {
          apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
        }
      },
      async callMeApi() {
        apiMessage.value = ''
        token.value = ''
        const accessToken = await auth0.getAccessTokenSilently()
        token.value = accessToken
        try {
          const url = `${localBaseApi}/v2/users/me`
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              DEBUG_CURRENT_DATE: '',
            },
          })

          apiMessage.value = response.data
        } catch (e) {
          apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
        }
      },
    }
  },
}
</script>

<style scoped>
.buttons {
  display: flex;
  gap: 1rem;
}
</style>
