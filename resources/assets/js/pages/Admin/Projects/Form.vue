<template>
    <section>
        <div class="col-md-9">
            <froala v-model="form.html"></froala>
        </div>
        <div class="col-md-3">
            <form @submit.prevent="submit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" name="url" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>URL</label>
                    <input type="text" class="form-control" name="url" v-model="form.url">
                </div>
                <div class="form-group">
                    <label>Project Image</label>
                    <div class="dropzone">
                        <!--<div class="@if(!isset($project)) hide @endif js-preview-reset btn btn-xs btn-primary">Reset</div>-->
                        <!--<h4 class="@if(isset($project)) hide @endif  dropzone-text">Drop files here or click to upload.</h4>-->
                        <!--<input type="file" name="project_image" id="js-image-upload" accept="image/jpeg">-->
                        <!--<img id="image-preview" class="img-responsive"/>-->
                    </div>

                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" class="form-control" v-model="form.start_date">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" class="form-control" v-model="form.end_date">
                </div>
                <div class="form-group">
                    <label>Timeline</label>
                    <select class="form-control" v-model="form.timeline">
                        <option></option>
                        <option v-for="timeline in timelines" :value="timeline.id">
                            {{ timeline.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Technologies</label>
                    <select class="form-control" multiple>
                        <option v-for="technology in technologies" :value="technology.id">
                            {{ technology.name }}
                        </option>
                    </select>
                </div>
                <br>
                <button class="btn btn-primary">
                    <template v-if="project">
                        Update
                    </template>
                    <template v-else>
                        Create
                    </template>
                </button>
            </form>
        </div>
    </section>
</template>

<script>
    import VueFroala from 'vue-froala-wysiwyg';

    export default {
        data() {
            return {
                form : this.createForm({
                    url : null,
                    name : null,
                    html : null,
                    timeline : null,
                    end_date : null,
                    start_date : null,
                })
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'project' : function() {
                this.form.fill(this.project)
            }
        } ,
        methods : {
            submit() {
                if(this.project) {
                    return this.update()
                }
                this.create()
            },
            create() {
                this.$store.dispatch('projects/store', this.form)
            },
            update() {
                this.$store.dispatch('projects/update', _.merge(this.form, { project : this.project.id }))
            },
            fetchData() {
                this.$store.dispatch('timelines/get')
                this.$store.dispatch('technologies/get')

                let project = this.$route.params.project
                if(project) {
                    this.$store.dispatch('projects/show', project)
                }
            },
        },
        computed : {
            project() {
                return this.$store.state.projects.project
            },
            timelines() {
                return this.$store.state.timelines.timelines
            },
            technologies() {
                return this.$store.state.technologies.technologies
            }
        }
    }
</script>