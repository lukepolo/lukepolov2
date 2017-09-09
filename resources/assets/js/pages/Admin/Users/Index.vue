<template>
    <section>
        <h3>Users</h3>
        <table class="table table-striped">
            <thead>
                <th>Name</th>
                <th></th>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td>
                    {{ user.name }}
                </td>
                <td>
                    <div class="btn-link confirm" @click="deleteUser(user)">Delete</div>
                </td>
            </tr>
            </tbody>
        </table>

        <pagination :pagination="usersPagination" commit="users/setAll"></pagination>

    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('users/get')
        },
        methods : {
            deleteUser(user) {
                this.$store.dispatch('users/destroy', user.id)
            }
        },
        computed : {
            users() {
                return this.$store.state.users.users
            },
            usersPagination() {
                return this.$store.state.users.pagination
            }
        }
    }
</script>