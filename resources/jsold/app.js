import store from "./store";
import router from "./router";

require("./bootstrap");
require("./components");
require("./mixins");

import { Material } from "vue-color";

window.store = store;

const app = new Vue({
  store,
  router
});

window.app = app;

app.$mount("#app");
