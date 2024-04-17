import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-vue'

export const localBaseApi = 'https://localhost:44394'

const client = axios.create({
  baseURL: localBaseApi,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
client.defaults.timeout = 1000 * 180 // Development mode.

async function customInterceptors(config) {
  const auth0 = useAuth0()
  const token = await auth0.getAccessTokenSilently()
  config.headers.Authorization = `Bearer ${token}`
  config.headers.SPA_VERSION = '123'
  config.headers.DEBUG_CURRENT_DATE = ''

  return config
}

// https://axios-http.com/docs/interceptors
export function applyCustomInterceptors() {
  client.interceptors.request.use(
    (config) => customInterceptors(config),
    (error) => Promise.reject(error)
  )
}

export function get(url, config) {
  return new Promise((resolve, reject) => {
    client
      .get(url, config)
      .then((response) => resolve(response))
      .catch((exception) => {
        console.error(exception, { url, config })
        reject(exception)
      })
  })
}
