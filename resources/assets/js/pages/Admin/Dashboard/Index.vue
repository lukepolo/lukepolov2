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
                @foreach($projects as $project)
                <tr>
                    <td>
                        <a href="--- action('ProjectsController@getEdit', $project->id)--- ">
                            --- $project->name---
                        </a>
                    </td>
                    <td>
                        <a target="_blank" href="--- $project->url--- ">
                            --- $project->url---
                        </a>
                    </td>
                    <td>--- !empty($project->timeline) ? $project->timeline->name : ''}}</td>
                    <td>--- $project->start_date->format('F jS Y g:i A')--- </td>
                    <td>--- $project->end_date->format('F jS Y g:i A')--- </td>
                    <td>
                        <a class="confirm" href="--- action('ProjectsController@getDelete', $project->id)--- ">Delete</a>
                    </td>watc
                </tr>
                @endforeach
                </tbody>
            </table>
        </template>

        <template v-else>
            <h3>No Projects</h3>
            <router-link class="btn btn-primary" :to="{ name : 'admin-projects-create' }">Create</router-link>
        </template>

    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('projects/get')
        },
        computed : {
            projects() {
                return []
            }
        }
    }
</script>