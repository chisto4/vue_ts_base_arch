import { createApp } from "vue";
import { createPinia } from "pinia";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Flicking", Flicking);

app.mount("#app");
