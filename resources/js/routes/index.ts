import RouterInterface from "varie/lib/routing/RouterInterface";

import middleware from "./middleware";
import ErrorViews from "@views/errors";
import Home from "@views/home/Home.vue";
import Blog from "@views/blog/Blog.vue";
import Blogs from "@views/blog/Blogs.vue";

export default function($router: RouterInterface) {
  /*
  |--------------------------------------------------------------------------
  | Your default routes for your application
  |--------------------------------------------------------------------------
  |
  */
  $router.route("/", Home);
  $router.route("/blogs", Blogs);
  $router.route("/blogs/:blogId", Blog).setName("blog");

  $router.route("*", ErrorViews.Error404);
}
