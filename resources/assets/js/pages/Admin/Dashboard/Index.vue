<template>
    <div class="row">
        <div class="col-md-6 admin-comments">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        User Comments
                        <span class="pull-right unread label" :class="{ 'label-warning' : comments.length > 0, 'label-default' : comments.length === 0 }">
                         <span class="count">{{ comments.length }}</span> Messages
                    </span>
                    </h3>
                </div>
                <div class="panel-body">
                    <template v-if="comments.length === 0">
                        <div class="text-center">
                            Go Enjoy Your Day!
                        </div>
                    </template>
                    <template v-for="comment in comments" v-else>
                        <div class="row">
                            <div class="col-sm-9">
                                <comment :comment="comment"></comment>
                            </div>
                            <div class="col-sm-3">
                                <div class="btn btn-primary">
                                    Moderated
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <!--<div class="row">-->
                <!--<div class="panel panel-default">-->
                    <!--<div class="panel-heading">-->
                        <!--<h3 class="panel-title">Active Users</h3>-->
                    <!--</div>-->
                    <!--<div class="panel-body">-->
                        <!--<div class="active-users text-center"></div>-->
                        <!--<div class="active-user-locations">-->
                            <!--<table class="table table-striped">-->
                                <!--<thead>-->
                                <!--<th>Location</th>-->
                                <!--<th>User Count</th>-->
                                <!--</thead>-->
                                <!--<tbody>-->
                                <!--</tbody>-->
                            <!--</table>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Visitors</h3>
                    </div>
                    <div class="visitor-chart">
                        <canvas id="chart"></canvas>
                    </div>
                    <div class="popular-pages">
                        <table class="table table-striped">
                            <thead>
                            <th>URL</th>
                            <th>Views</th>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Comment from './../../Blogs/Components/Comment.vue'
    export default {
        components : {
          Comment,
        },
        created() {
            this.$store.dispatch('admin_blog_comments/get')
        },
        computed : {
            user() {
                return this.$store.state.auth.authed_user
            },
            comments() {
                return this.$store.state.admin_blog_comments.comments
            },
            commentsPagination() {
                return this.$store.state.admin_blog_comments.pagination
            }
        }
    }
</script>