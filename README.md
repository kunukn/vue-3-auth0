# vue-3-auth0
Playground for Vue 3 + Auth0

# Getting started

## Prerequisite

- You need to have an Auth0 app.
- The `.env` must be updated with values from the Auth0 settings.

## Install steps:

```bash
# Ensure you have mkcert installed

npm install

npm run create-env # creates a boilerplate .env file

# Update the .env file with your Auth0 config data.
npm run install-mkcert # Done once per device

npm run create-cert-files-in-folder

npm start
```
