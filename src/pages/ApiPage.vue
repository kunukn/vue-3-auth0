<template>
  <div>
    <div>
      <h1>External API</h1>
      <h2>!! Only works on localhost, not deployed to PROD.</h2>
      <p><b>baseApiUrl:</b> {{ baseApiUrl }}</p>
      <p>
        Call an external API by clicking the button below. This will call the
        external API using an access token, and the API will validate it using
        the API's audience value.
      </p>
      <input type="text" v-model="urlText" @keyup.enter="callUrl" />
      <button @click="callUrl">GET</button>
    </div>

    <div>
      <h6>Result</h6>
      <pre>{{ JSON.stringify(apiMessage, null, 1) }}</pre>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'
import axios from 'axios'

export const baseApiUrl = import.meta.env.VITE_BASE_API_URL

export default {
  setup() {
    const auth0 = useAuth0()
    const apiMessage = ref('')
    const token = ref('')
    const urlText = ref('/api/external')
    return {
      apiMessage,
      token,
      urlText,
      baseApiUrl,
      async callUrl() {
        apiMessage.value = ''
        token.value = ''
        const accessToken = await auth0.getAccessTokenSilently()
        token.value = accessToken
        try {
          const url = `${baseApiUrl}${urlText.value}`
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
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
pre {
  font-size: 14px;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.token {
  padding-top: 16px;
  word-break: break-all;
  font-size: 14px;
}

p {
  margin-bottom: 16px;
}
</style>
