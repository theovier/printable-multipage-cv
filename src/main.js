import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";
import FontAwesomeIcon from "./assets/fontawesome-icons";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
