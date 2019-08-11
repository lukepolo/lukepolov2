import { ProjectState } from "./stateInterface";

export default function() {
  return {
    VIEW_PROJECT: (state: ProjectState, project) => {
      state.viewingProject = project;
    },
    CLOSE_PROJECTS(state: ProjectState) {
      state.viewingProject = null;
    },
  };
}
