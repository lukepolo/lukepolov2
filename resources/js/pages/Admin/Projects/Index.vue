<template>
    <section>
        <template v-if="projects.length">
            <h3>Projects</h3>
            <table class="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Timeline</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="project in projects">
                        <td>
                            <router-link :to="{ name : 'admin-projects-edit', params : { project : project.id } }">
                                {{ project.name }}
                            </router-link>
                        </td>
                        <td>
                            <a target="_blank" :href="project.url">
                                {{ project.url }}
                            </a>
                        </td>
                        <td>
                            <template v-if="project.timeline">
                                {{ project.timeline.name }}
                            </template>
                        </td>
                        <td>{{ project.start_date }}</td>
                        <td>{{ project.end_date }}</td>
                        <td>
                            <div class="btn-link confirm" @click="deleteProject(project)">Delete</div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <router-link class="btn btn-primary" :to="{ name : 'admin-projects-create' }">Create</router-link>

        </template>
        <template v-else>
            <h3 class="text-center">
                Lets create your first <router-link class="text-center" :to="{ name : 'admin-projects-create' }"> Project</router-link>!
            </h3>
        </template>

    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('projects/get')
        },
        methods : {
            deleteProject(project) {
                this.$store.dispatch('projects/destroy', project.id)
            }
        },
        computed : {
            projects() {
                return this.$store.state.projects.projects
            }
        }
    }
</script>