import { createApp } from "vue"
import router from "./router";
import { createVfm } from 'vue-final-modal'
import FontAwesomeIcon from './plugins/fontAwesome'
import 'vue-final-modal/style.css'

import "./style.scss";
import App from "./App.vue";
import "bootstrap";


createApp(App).component('font-awesome-icon', FontAwesomeIcon)
    .use(router).use(createVfm()).mount("#app");
