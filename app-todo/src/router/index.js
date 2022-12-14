import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "login" &&
    to.name !== "register" &&
    !store.state.isAuthenticated
  ) {
    next({ name: "login" });
  } else {
    if (
      (to.name === "login" || to.name === "register") &&
      store.state.isAuthenticated
    ) {
      next({ name: "home" });
    } else {
      next();
    }
  }
});

export default router;
