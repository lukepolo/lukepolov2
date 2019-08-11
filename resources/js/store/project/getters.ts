import { ProjectState } from "./stateInterface";

export default function() {
  return {
    SAMPLE_GETTER: (state: ProjectState) => {
      return state;
    },
  };
}
