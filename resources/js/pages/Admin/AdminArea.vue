<template>
    <section class="container admin-area">
        <admin-navigation></admin-navigation>
        <router-view></router-view>
    </section>
</template>

<script>
    import AdminNavigation from './Components/AdminNavigation.vue'
    export default {
        components : {
            AdminNavigation
        }
    }
</script>