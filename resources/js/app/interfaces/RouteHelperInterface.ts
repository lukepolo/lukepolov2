export default interface RouteHelperInterface {
  action(name: string, parameters: object): string;
  link_to(url: string, title: string, attributes): string;
  link_to_action(
    action: string,
    title: string,
    parameters: object,
    attributes,
  ): string;
  link_to_route(
    route: string,
    title: string,
    parameters: object,
    attributes,
  ): string;
  route(route: string, parameters: object): string;
  url(route: string, parameters: object): string;
}
