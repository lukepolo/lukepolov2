<template>
    <section>
        <template v-if="technologies.length">
            <h3>Technologies</h3>
            <table class="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Color</th>
                    <th></th>
                </thead>
                <tbody>
                <tr v-for="technology in technologies">
                    <td>
                        <router-link :to="{ name : 'admin-technologies-edit', params : { technology : technology.id } }">
                            {{ technology.name }}
                        </router-link>
                    </td>
                    <td>{{ technology.url }}</td>
                    <td>{{ technology.color }}</td>
                    <td>
                        <div class="btn-link confirm" @click="deleteTechnology(technology)">Delete</div>
                    </td>
                </tr>
                </tbody>
            </table>

            <router-link class="btn btn-primary" :to="{ name : 'admin-technologies-create' }">Create</router-link>

        </template>
        <template v-else>
            <h3 class="text-center">
                Lets create your first <router-link class="text-center" :to="{ name : 'admin-technologies-create' }"> Techonlogy</router-link>!
            </h3>
        </template>

    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('technologies/get')
        },
        methods : {
            deleteTechnology(technology) {
                this.$store.dispatch('technologies/destroy', technology.id)
            }
        },
        computed : {
            technologies() {
                return this.$store.state.technologies.technologies
            }
        }
    }
</script>