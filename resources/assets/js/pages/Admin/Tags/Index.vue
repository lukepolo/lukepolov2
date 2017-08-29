<template>
    <section>
        <template v-if="tags.length">
            <h3>Tags</h3>
            <table class="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>Color</th>
                    <th></th>
                </thead>
                <tbody>
                <tr v-for="tag in tags">
                    <td>
                        <router-link :to="{ name : 'admin-tags-edit', params : { tag : tag.id } }">
                            {{ tag.name }}
                        </router-link>
                    </td>
                    <td>{{ tag.color }}</td>
                    <td>
                        <div class="btn-link confirm" @click="deletetag(tag)">Delete</div>
                    </td>
                </tr>
                </tbody>
            </table>

            <router-link class="btn btn-primary" :to="{ name : 'admin-tags-create' }">Create</router-link>

        </template>
        <template v-else>
            <h3 class="text-center">
                Lets create your first <router-link class="text-center" :to="{ name : 'admin-tags-create' }"> Tag</router-link>!
            </h3>
        </template>


    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('tags/get')
        },
        methods : {
            deletetag(tag) {
                this.$store.dispatch('tags/destroy', tag.id)
            }
        },
        computed : {
            tags() {
                return this.$store.state.tags.tags
            }
        }
    }
</script>