import Home from "./Home/routes";
import Admin from "./Admin/routes";
import Blogs from "./Blogs/routes";

import Login from "./Login.vue";
import Resume from "./Resume.vue";
import Privacy from "./Privacy.vue";
import PageNotFound from "./PageNotFound.vue";
import TermsOfService from "./TermsOfService.vue";

let routes = [
  ...Home,
  ...Admin,
  ...Blogs,
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: { redirectIfAuthed: true }
  },
  {
    path: "/resume",
    component: Resume,
    name: "resume"
  },
  {
    path: "/privacy",
    component: Privacy,
    name: "privacy"
  },
  {
    path: "/terms-of-service",
    component: TermsOfService,
    name: "terms-of-service"
  },
  {
    path: "*",
    component: PageNotFound
  }
];

export default routes;
