import { createRouter, createWebHashHistory } from "vue-router";
import { auth } from "../pages/auth"
import { feeds } from "../pages/feeds"
import { stories } from "../pages/stories"
import * as api from "../api";

const routes = [
  {
    path: "/",
    name: "feeds",
    component: feeds
  },
  {
    path: "/auth",
    name: "auth",
    component: auth
  },
  {
    path: "/stories",
    name: "stories",
    component: stories
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === "auth";

  try {
    await api.user.getUserData();
    next(authRoute ? { name: "feeds" } : null);
  } catch (e) {
    next(authRoute ? null : { name: "auth" });
  }
});

export default router;