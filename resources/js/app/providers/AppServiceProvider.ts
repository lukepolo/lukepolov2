import Vue from "vue";
import { ServiceProvider } from "varie";
import VueFroala from "vue-froala-wysiwyg";
import ProjectService from "@app/services/ProjectService";

require("@app/helpers/routes");

/*
|--------------------------------------------------------------------------
| App Service Provider
|--------------------------------------------------------------------------
| You can bind various items to the app here, or can create other
| custom providers that bind the container
|
*/
export default class AppProviderServiceProvider extends ServiceProvider {
  public async boot() {
    Vue.use(VueFroala);
  }

  public async register() {
    this.app.constant("RouteHelper", laroute);

    this.app.bind<ProjectService>("ProjectService", ProjectService);
  }
}
