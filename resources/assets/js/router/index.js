import VueRouter from "vue-router";
import routes from "./../pages/routes";

import { scrollToTop } from "../mixins/helpers/window/index";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

router.beforeResolve((to, from, next) => {
  let authedUser = store.state.auth.authed_user;

  if (
    to.matched.some(match => {
      return match.meta.admin;
    }) &&
    (!authedUser || store.state.auth.authed_user.role !== "admin")
  ) {
    return next("/login");
  }

  if (to.meta.redirectIfAuthed && authedUser) {
    return next("/");
  }

  scrollToTop(200);

  next();
});

export default router;
