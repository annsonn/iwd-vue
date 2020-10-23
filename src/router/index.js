import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: News,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
