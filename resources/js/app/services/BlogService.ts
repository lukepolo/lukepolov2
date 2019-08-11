import { injectable, inject } from "inversify";
import RestServiceClass from "@app/extensions/RestServiceClass";

@injectable()
export default class BlogService extends RestServiceClass {
  constructor(
    @inject("HttpService") httpService,
    @inject("RouteHelper") routeHelper,
  ) {
    super(httpService, routeHelper, "BlogsController");
  }
}
