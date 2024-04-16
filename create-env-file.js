import fs from 'fs'

const filename = '.env'

const content = `
VITE_AUTH0_DOMAIN=<YOUR-DOMAIN>.auth0.com
VITE_AUTH0_DOMAIN_URL=https://<YOUR-DOMAIN>.auth0.com
VITE_AUTH0_CLIENT_ID=abcdefgh12345678
VITE_AUTH0_SCOPE=openid profile email offline_access
VITE_AUTH0_AUDIENCE=<AUDIENCE>
VITE_AUTH0_CALLBACK_URL=auth-callback
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
