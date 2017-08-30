<template>
    <div>
        <div class="col-md-3 visible-md visible-lg">
            <git-tree v-if="projects"></git-tree>
        </div>
        <div class="col-md-9">
            <div class="select-title">
                <h1>Projects</h1>
                <div>
                    <small>
                        <span class="visible-md visible-lg">
                            <i class="fa fa-long-arrow-left"></i> You can navigate my site using my "git tree" just click / hover over them
                        </span>
                        <span class="visible-sm visible-xs">
                            Click on the images to find out more
                        </span>
                    </small>
                </div>
                <hr>
            </div>
            <template v-for="project in projects">
                <project :project="project"></project>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('projects/get')
            this.$store.dispatch('timelines/get')
        },
        computed : {
            projects() {
                return this.$store.state.projects.projects
            }
        }
    }
</script>