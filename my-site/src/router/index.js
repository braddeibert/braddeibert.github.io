import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing";
import About from "../views/About";
import Resume from "../views/Resume";
import Projects from "../views/Projects";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Landing
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/resume",
    component: Resume
  },
  {
    path: "/projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
