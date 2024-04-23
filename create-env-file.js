import fs from 'fs'

const filename = '.env'

const content = `
VITE_AUTH0_DOMAIN=abcdefgh12345678.auth0.com <-- Replace
VITE_AUTH0_CLIENT_ID=abcdefgh12345678        <-- Replace
VITE_AUTH0_SCOPE=openid profile email offline_access
VITE_AUTH0_AUDIENCE=https://myapp.com        <-- Replace
VITE_AUTH0_CALLBACK_URL=/auth-callback
VITE_BASE_API_URL=https://localhost:44394    <-- Replace
`

fs.access(filename, fs.F_OK, (err) => {
  if (err) {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('.env file was created', content)
    })
  }
})
