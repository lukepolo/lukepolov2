import { ActionContext } from "vuex";
import RootState from "@store/rootState";
import { BlogState } from "./stateInterface";

export default function(httpService) {
  return {
    sampleAction: (context: ActionContext<BlogState, RootState>, data) => {
      return httpService.post("/some-url", {
        data,
      });
    },
  };
}
