import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { injectable, inject, unmanaged } from "inversify";
import RestStoreModule from "@app/extensions/RestStoreModule/RestStoreModule";

@injectable()
export default class BlogStore extends RestStoreModule {
  constructor(@inject("BlogService") blogService) {
    super(blogService, "blog");
    this.setName("blogs")
      .addState(state)
      .addActions(actions(blogService))
      .addMutations(mutations)
      .addGetters(getters);
  }
}
