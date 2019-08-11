import { BlogState } from "./stateInterface";

export default function() {
  return {
    SAMPLE_GETTER: (state: BlogState) => {
      return state;
    },
  };
}
