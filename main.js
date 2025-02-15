import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
  },
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
