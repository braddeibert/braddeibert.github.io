import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//import bootstrap 5 and popper, bootstrap icons
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap-icons";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
