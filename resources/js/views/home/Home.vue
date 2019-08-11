<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 visible-md visible-lg">
        <git-tree v-if="projects.length > 0"></git-tree>
      </div>
      <div class="col-md-9">
        <project
          :project="project"
          v-for="project in projects"
          :key="project.id"
        ></project>
      </div>
    </div>
  </div>
</template>

<script>
import GitTree from "./components/GitTree";
import Project from "./components/Project";

export default {
  components: {
    GitTree,
    Project,
  },
  created() {
    this.$store.dispatch("projects/get");
  },
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    },
  },
};
</script>
