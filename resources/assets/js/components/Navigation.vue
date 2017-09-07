<template>
    <nav id="main-nav" class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/">LukePOLO</router-link>
            </div>
            <div id="main-menu" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link :to="{ name : 'blogs' }">BLOG</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name : 'resume' }">RESUME</router-link>
                    </li>
                    <template v-if="isAuthed">
                        <template v-if="isAdmin">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    ADMIN
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <router-link :to="{ name : 'admin-dashboard' }">Dashboard</router-link>
                                    </li>
                                    <li><a href="#">Users</a></li>
                                    <li><a href="#">Settings</a></li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#" @click.prevent="logout">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </template>
                        <template v-else>
                            <l>
                                <a href="#" @click.prevent="logout">LOGOUT</a>
                            </l>
                        </template>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        methods : {
            logout() {
                this.$store.dispatch('auth/logout')
            }
        }
    }
</script>