import Vue from "vue";
import router from "@/router";
import App from "./App.vue";

//import bootstrap 5 and popper, bootstrap icons
import "@popperjs/core";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
