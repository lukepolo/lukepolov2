<template>
    <div class="row">
        <div class="col-md-6">
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
                                <comment v-on:updated="refreshPagination" :comment="comment"></comment>
                            </div>
                            <div class="col-sm-3">
                                <div class="btn btn-primary" @click="moderatedComment(comment.id)">
                                    Moderated
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="row">
                        <pagination :pagination="commentsPagination" commit="admin_blog_comments/setAll" :refresh.sync="refresh"></pagination>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
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
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Visitors</h3>
                </div>
                <div class="panel-body">
                    <div class="visitor-chart">
                        <canvas ref="chart"></canvas>
                    </div>

                    <div class="popular-pages">
                        <table class="table table-striped">
                            <thead>
                            <th>URL</th>
                            <th>Views</th>
                            </thead>
                            <tbody>
                            <tr v-for="datum in popularData">
                                <td>{{ datum.url }}</td>
                                <td>{{ datum.pageViews }} </td>
                            </tr>
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
        data() {
            return {
                refresh : false,
                popularData : {}
            }
        },
        created() {
            this.createChart()
            this.$store.dispatch('admin_blog_comments/get')
            Vue.request().get('/api/admin/most-visited-pages').then((data) => {
                this.popularData = data
            });
        },
        methods : {
            moderatedComment(comment) {
                this.$store.dispatch('admin_blog_comments/update', {
                    comment : comment
                }).then(() => {
                    this.refreshPagination()
                })
            },
            createChart() {
                Vue.request().get('/api/admin/visitors-and-page-views').then((data) => {
                    new Chart(this.$refs.chart.getContext("2d"), {
                        type: 'line',
                        data : {
                            labels: data.labels,
                            datasets: [
                                {
                                    label: "Visitors",
                                    backgroundColor: "rgba(151,187,205,1)",
                                    borderColor: "rgba(151,187,205,1)",
                                    data: data.visitors
                                },
                                {
                                    label: "Views",
                                    fill: false,
                                    borderDash: [5, 5],
                                    data: data.views
                                }
                            ]
                        },
                        options :  {
                            responsive: true,
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },
                        }
                    })
                })
            },
            refreshPagination() {
                Vue.set(this, 'refresh', true)
            }
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