<template>
    <section>
        <div class="col-md-6 admin-comments">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        User Comments
                        <span class="pull-right unread label @if($comments->count() == 0) label-default @else label-warning @endif">
                         <span class="count">-- $comments->count() --</span> Messages
                    </span>
                    </h3>
                </div>
                <div class="panel-body">
                    @if($comments->count()  == 0)
                    <div class="text-center">
                        Go Enjoy Your Day!
                    </div>
                    @else
                    -- Form::open(['class' => 'comment-form form-horizontal hide']) --
                    <div class="form-group">
                        <div class="col-sm-2">
                            <img class="pull-right user-image img-responsive"
                                 src="-- empty(\Auth::user()->profile_img) === false ?  \Auth::user()->profile_img : asset('/img/user.svg') --">
                        </div>
                        <div class="col-sm-10">
                            <div class="row">
                                -- Form::text('comment', null, ['class'=> 'comment-text form-control','placeholder' =>'Reply . . . ']) --
                            </div>
                        </div>
                    </div>
                    -- Form::submit('Post', ['class' => 'pull-right comment-post btn btn-primary']) --
                    <div class="pull-right btn btn-danger cancel">Cancel</div>
                    -- Form::close() --
                    @foreach($comments->reverse() as $comment)
                    @include('admin.comment', ['comment' => $comment])
                    @endforeach
                    @endif
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Active Users</h3>
                    </div>
                    <div class="panel-body">
                        <div class="active-users text-center"></div>
                        <div class="active-user-locations">
                            <table class="table table-striped">
                                <thead>
                                <th>Location</th>
                                <th>User Count</th>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
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
    </section>
</template>

<script>
    export default {
        created() {

        }
    }
</script>