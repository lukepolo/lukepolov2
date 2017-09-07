<template>
    <section>
        <template v-if="timelines.length">
            <div class="col-md-9">
                <froala :config="froalaConfig" v-model="form.html"></froala>
            </div>
            <div class="col-md-3">
                <form @submit.prevent="submit()">
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" name="url" v-model="form.name">
                    </div>
                    <div class="form-group">
                        <label>URL</label>
                        <input class="form-control" name="url" v-model="form.url">
                    </div>
                    <div class="form-group">
                        <label>Project Image</label>
                        <div class="dropzone">
                            <div class="js-preview-reset btn btn-xs btn-primary" v-if="projectImage" @click="resetProjectImage">Reset</div>
                            <h4 class="dropzone-text" v-if="!projectImage">Drop files here or click to upload.</h4>
                            <input type="file" name="project_image" @change="onFileChange">
                            <img id="image-preview" class="img-responsive" :src="projectImage"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Start Date</label>
                        <flat-pickr v-model="form.start_date"></flat-pickr>
                    </div>
                    <div class="form-group">
                        <label>End Date</label>
                        <flat-pickr v-model="form.end_date"></flat-pickr>
                    </div>
                    <div class="form-group">
                        <label>Timeline</label>
                        <select class="form-control" v-model="form.timeline_id">
                            <option></option>
                            <option v-for="timeline in timelines" :value="timeline.id">
                                {{ timeline.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Technologies</label>
                        <select class="form-control" multiple v-model="form.technologies" v-if="technologies">
                            <option v-for="technology in technologies" :value="technology.id">
                                {{ technology.name }}
                            </option>
                        </select>
                    </div>
                    <br>
                    <button class="btn btn-primary">
                        <template v-if="projectId">
                            Update
                        </template>
                        <template v-else>
                            Create
                        </template>
                    </button>
                </form>
            </div>
        </template>
        <template v-else>
            <div class="alert alert-warning">
                You need to create at least one <router-link :to="{ name : 'admin-timelines-create' }">timeline</router-link>!
            </div>
        </template>

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
                    end_date : null,
                    start_date : null,
                    timeline_id : null,
                    project_image : null,
                    remove_project_image : null,
                    technologies : [],
                }),
                projectImageBase64 : null,
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'project' : function() {
                this.fill()
            },
            'timelines' : function() {
                this.fill()
            }
        } ,
        methods : {
            fill() {
                if(this.projectId && this.project) {
                    this.form.fill(this.project)
                    Vue.set(this.form, 'technologies', _.map(this.project.technologies, 'id'))
                }
            },
            submit() {

                let formData = new FormData();

                _.each(this.form, function(value, key) {
                    if(!_.isNull(value) && typeof value !== 'undefined') {
                        formData.append(key, value);
                    }
                })

                if(this.projectId) {
                    return this.update(formData)
                }
                this.create(formData)
            },
            create(formData) {
                this.$store.dispatch('projects/store', formData)
            },
            update(formData) {
                this.$store.dispatch('projects/update', {
                    formData : formData,
                    project : this.project.id
                })
            },
            fetchData() {

                this.form.reset();

                this.$store.dispatch('timelines/get')
                this.$store.dispatch('technologies/get')

                if(this.projectId) {
                    this.$store.dispatch('projects/show', this.projectId)
                }
            },
            resetProjectImage() {
                Vue.set(this.form, 'project_image', null)
                Vue.set(this, 'projectImageBase64', null)
                Vue.set(this.form, 'remove_project_image', true)
            },
            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                if (!files.length) {
                    return;
                }

                let file = files[0];
                let reader = new FileReader();

                reader.onload = (e) => {
                    Vue.set(this, 'projectImageBase64', e.target.result)
                }

                reader.readAsDataURL(file)

                Vue.set(this.form, 'project_image', file)
                Vue.set(this.form, 'remove_project_image', false)
            },
        },
        computed : {
            project() {
                return this.$store.state.projects.project
            },
            projectId() {
                return this.$route.params.project
            },
            timelines() {
                return this.$store.state.timelines.timelines
            },
            technologies() {
                return this.$store.state.technologies.technologies
            },
            projectImage() {
                if(this.projectImageBase64) {
                    return this.projectImageBase64
                }

                if(_.isString(this.form.project_image)) {
                    return this.form.project_image
                }

            }
        }
    }
</script>