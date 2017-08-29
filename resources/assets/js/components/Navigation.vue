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
                <!--<a class="navbar-brand" href="action('HomeController@index')">LukePOLO</a>-->
            </div>
            <div id="main-menu" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">BLOG</a>
                    </li>
                    <li>
                        <a href="#">RESUME</a>
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
                                    <li><a href="action('Auth\AuthController@getUsers')">Users</a></li>
                                    <li><a href="action('SettingsController@getIndex')">Settings</a></li>
                                    <li class="divider"></li>
                                    <li><a href="action('Auth\AuthController@getLogout')">Logout</a></li>
                                </ul>
                            </li>
                        </template>
                        <template v-else>
                            <li><a href="#">Logout</a></li>
                        </template>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>