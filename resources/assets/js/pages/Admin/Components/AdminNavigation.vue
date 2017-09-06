<template>
    <div>
        <div class="row panel-links">
            <div class="col-md-2">
                <router-link tag="div" :to="{ name : 'admin-dashboard'}" class="panel panel-default">
                    <div class="panel-color"></div>
                    <div class="panel-body">
                        Dashboard
                        <span>
                            <div class="pull-right">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-2">
                <router-link tag="div" :to="{ name : 'admin-projects'}" class="panel panel-default">
                    <div class="panel-color"></div>
                        <div class="panel-body">
                            Projects
                            <span>
                            <div class="pull-right">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-2">
                <router-link tag="div" :to="{ name : 'admin-blogs'}" class="panel panel-default">
                    <div class="panel-color"></div>
                    <div class="panel-body">
                        Blogs
                        <span>
                            <div class="pull-right">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-2">
                <router-link tag="div" :to="{ name : 'admin-timelines'}" class="panel panel-default">
                    <div class="panel-color"></div>
                    <div class="panel-body">
                        Timelines
                        <span>
                            <div class="pull-right">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-2">
                <router-link tag="div" :to="{ name : 'admin-technologies'}" class="panel panel-default">
                    <div class="panel-color"></div>
                    <div class="panel-body">
                        Technologies
                        <span>
                            <div class="pull-right">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-2">
                <router-link tag="div" :to="{ name : 'admin-tags'}" class="panel panel-default">
                    <div class="panel-color"></div>
                    <div class="panel-body">
                        Tags
                        <span>
                            <div class="pull-right">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
        <!--@if($errors->has())-->
        <!--<div class="alert alert-danger">-->
            <!--@foreach ($errors->all() as $error)-->
            <!--<ul>-->
                <!--<li>-->
                    <!--{{ $error }}-->
                <!--</li>-->
            <!--</ul>-->
            <!--@endforeach-->
        <!--</div>-->
        <!--@endif-->
    </div>
</template>

<script>
    export default {

    }
</script>