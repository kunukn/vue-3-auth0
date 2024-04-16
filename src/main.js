import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import router from "./router";

console.log(import.meta.env.VITE_SOME_KEY);

const auth0Config = {
  domain: import.meta.env.AUTH0_DOMAIN,
  clientId: import.meta.env.AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: import.meta.env.CALLBACK_URL,
  },
};

console.log(auth0Config);

const app = createApp(App).use(createAuth0(auth0Config)).use(router);

app.mount("#app");
