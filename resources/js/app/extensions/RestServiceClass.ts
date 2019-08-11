import { injectable, unmanaged } from "inversify";
import HttpServiceInterface from "varie/lib/http/HttpServiceInterface";
import RouteHelperInterface from "@app/interfaces/RouteHelperInterface";

@injectable()
export default class RestServiceClass {
  protected controllerClass: string;
  protected httpService: HttpServiceInterface;
  protected routeHelper: RouteHelperInterface;

  constructor(
    httpService,
    routeHelper: RouteHelperInterface,
    @unmanaged() controllerClass: string,
  ) {
    this.httpService = httpService;
    this.routeHelper = routeHelper;
    this.controllerClass = controllerClass;
  }

  public get(parameters = null) {
    return this.httpService.get(this.getUrl("index", parameters));
  }

  public create(parameters = null, data) {
    return this.httpService.post(this.getUrl("store", parameters), data);
  }

  public show(parameters) {
    return this.httpService.get(this.getUrl("show", parameters));
  }

  public update(parameters, data) {
    return this.httpService.patch(this.getUrl("update", parameters), data);
  }

  public destroy(parameters) {
    return this.httpService.delete(this.getUrl("destroy", parameters));
  }

  protected getUrl(action: string, parameters: object): string {
    if (parameters) {
      parameters = JSON.parse(JSON.stringify(parameters));
    }

    let url = this.routeHelper.action(
      `${this.controllerClass}@${action}`,
      parameters,
    );

    if (!url) {
      throw `Invalid Controller/Action : ${this.controllerClass}@${action}`;
    }

    return url;
  }
}
