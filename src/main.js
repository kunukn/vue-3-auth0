import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import router from "./router";

console.log(import.meta.env.VITE_SOME_KEY) 

const app = createApp(App)
  .use(
    createAuth0({
      domain: "<AUTH0_DOMAIN>",
      clientId: "<AUTH0_CLIENT_ID>",
      authorizationParams: {
        redirect_uri: "<MY_CALLBACK_URL>",
      },
    })
  )
  .use(router);

app.mount("#app");
