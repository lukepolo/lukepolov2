<template>
    <section>
        <template v-if="projects.length">
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
                            {{ project.name }}
                        </td>
                        <td>
                            <a target="_blank" :href="project.url">
                                {{ project.url }}
                            </a>
                        </td>
                        <td>{{ project.timeline }} </td>
                        <td>{{ project.end_date }}</td>
                        <td>{{ project.start_date }}</td>
                        <td>
                            <div class="btn-link confirm" @click="deleteProject(project)">Delete</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>

        <router-link class="btn btn-primary" :to="{ name : 'admin-projects-create' }">Create</router-link>

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