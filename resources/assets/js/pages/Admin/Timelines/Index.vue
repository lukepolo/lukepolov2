<template>
    <section>
        <h3>Timelines</h3>
        <template v-if="timelines.length">
            <table class="table table-striped">
                <thead>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th></th>
                </thead>
                <tbody>
                    <tr v-for="timeline in timelines">
                        <td>
                            <router-link :to="{ name : 'admin-timelines-edit', params : { timeline : timeline.id } }">
                                {{ timeline.name }}
                            </router-link>
                        </td>
                        <td>{{ timeline.start_date }}</td>
                        <td>{{ timeline.end_date }}</td>
                        <td>
                            <div class="btn-link confirm" @click="deleteTimeline(timeline)">Delete</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
        <router-link class="btn btn-primary" :to="{ name : 'admin-timelines-create' }">Create</router-link>
    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('timelines/get')
        },
        methods : {
            deleteTimeline(timeline) {
                this.$store.dispatch('timelines/destroy', timeline.id)
            }
        },
        computed : {
            timelines() {
                return this.$store.state.timelines.timelines
            }
        }
    }
</script>