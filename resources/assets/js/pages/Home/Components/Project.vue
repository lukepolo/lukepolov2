<template>
    <section>
        <div class="project" @click="viewProject" v-show="!setProject">
            <div class="col-md-6 img-holder" :data-project_id="project.id">
                <img class="img-responsive" :src="project.project_image">
            </div>
        </div>
        <div class="project-details" id="project->id" v-show="viewingProject">
            <div class="show-projects">
                <span class="btn btn-info" @click.stop="closeProject()">
                    <i class="fa fa-arrow-left"></i>
                </span>
                <h2>
                    {{ project.name }}
                    <small><a target="_blank" :href="project.url">{{ project.url }}</a></small>
                </h2>
            </div>
            <hr>
            <div class="row panel-links">
                <div class="col-lg-3" v-for="technology in technologies" @click="goToUrl(technology.url)">
                    <div class="panel panel-default">
                        <div :style="'background-color:' + technology.color"
                             class="panel-color"></div>
                        <div class="panel-body">
                            {{ technology.name }}
                            <span>
                                    <i :style="'color:'+technology.color" class="pull-right fa fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="project-html">
                <froalaView v-model="project.html"></froalaView>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props : ['project'],
        data() {
            return {
                viewing : false
            }
        },
        methods: {
            goToUrl(url) {
                window.open(url)
            },
            viewProject() {

                this.$store.commit('projects/set', this.project)
            },
            closeProject() {
                this.$store.commit('projects/set', null)
            }
        },
        computed : {
            technologies() {
                return _.sortBy(this.project.technologies, 'name')
            },
            setProject() {
                return this.$store.state.projects.project
            },
            viewingProject() {
                if(this.setProject && this.setProject.id === this.project.id) {
                    return true
                }
                return false
            },
        }
    }
</script>