<template>
    <section>
        <h3>Blogs</h3>
        <template v-if="blogs.length">
            <table class="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>Draft</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Preview</th>
                    <th></th>
                </thead>
                <tbody>
                <tr v-for="blog in blogs">
                    <td>
                        <router-link :to="{ name : 'admin-blogs-edit', params : { blog : blog.id } }">
                            {{ blog.name }}
                        </router-link>
                    </td>
                    <td>{{ blog.draft }}</td>
                    <td>{{ blog.created_at }}</td>
                    <td>{{ blog.updated_at }}</td>
                    <td>preview</td>
                    <td>
                            <div class="btn-link confirm" @click="deleteBlog(blog)">Delete</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </template>
        <router-link class="btn btn-primary" :to="{ name : 'admin-blogs-create' }">Create</router-link>
    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('blogs/get')
        },
        methods : {
            deleteBlog(blog) {
                this.$store.dispatch('blogs/destroy', blog.id)
            }
        },
        computed : {
            blogs() {
                return this.$store.state.blogs.blogs
            }
        }
    }
</script>