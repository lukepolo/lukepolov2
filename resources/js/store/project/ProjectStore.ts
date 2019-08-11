import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { injectable, inject, unmanaged } from "inversify";
import RestStoreModule from "@app/extensions/RestStoreModule/RestStoreModule";

@injectable()
export default class ProjectStore extends RestStoreModule {
  constructor(@inject("ProjectService") projectService) {
    super(projectService, "project");
    this.setName("projects")
      .addState(state)
      .addActions(actions(projectService))
      .addMutations(mutations)
      .addGetters(getters);
  }
}
