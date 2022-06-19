import { createApp } from "vue";
import App from "./App.vue";

// import tailwind
import "./index.css";

const app = createApp(App);

// router setup
import { router } from "./router";
app.use(router);

// pinia setup
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

// mount
app.mount("#app");
