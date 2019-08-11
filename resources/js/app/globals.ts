import ConfigInterface from "varie/lib/config/ConfigInterface";
import ApplicationInterface from "varie/lib/foundation/ApplicationInterface";
import RouteHelperInterface from "@app/interfaces/RouteHelperInterface";

/*
|--------------------------------------------------------------------------
| App Globals
|--------------------------------------------------------------------------
| We have a few globals that the framework sets by default
|
*/

declare global {
  const $config: ConfigInterface;
  const $app: ApplicationInterface;
  const laroute: RouteHelperInterface;
  type AnyClass = { new (): any };
}
