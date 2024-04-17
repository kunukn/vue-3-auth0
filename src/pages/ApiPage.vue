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

<script>
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'
import axios from 'axios'
import { get, localBaseApi } from '@/setupApi'

export default {
  setup() {
    const auth0 = useAuth0()
    const apiMessage = ref()
    return {
      apiMessage,
      async callApi() {
        const accessToken = await auth0.getAccessTokenSilently()
        console.log({ accessToken })
        try {
          let url = `${localBaseApi}/v2/users/me`
           url = `${localBaseApi}/appsettings`

          let r = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              DEBUG_CURRENT_DATE: '',
              SPA_VERSION: '123',
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })

          apiMessage.value = r.data
        } catch (e) {
          apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
        }
      },
    }
  },
}
</script>
