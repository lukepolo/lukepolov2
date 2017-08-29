<template>
    <div>
        <div class="col-md-3 visible-md visible-lg">
            <svg id="git_tree"></svg>
        </div>
        <div class="col-md-9">
            <div class="select-title">
                <h1>Projects</h1>
                <div>
                    <small>
                        <span class="visible-md visible-lg">
                            <i class="fa fa-long-arrow-left"></i> You can navigate my site using my "git tree" just click / hover over them
                        </span>
                        <span class="visible-sm visible-xs">
                            Click on the images to find out more
                        </span>
                    </small>
                </div>
                <hr>
            </div>
            @foreach($projects as $project)
                <div class="project">
                    <div class="col-md-6 img-holder" data-project_id="project_id">
                        <img class="img-responsive" src="">
                    </div>
                </div>
                <div class="project-details" id="project->id">
                    <div class="show_projects">
                        <span class="btn btn-info">
                            <i class="fa fa-arrow-left"></i>
                        </span>
                        <h2>
                            project-name
                            <small><a target="_blank" href="">url</a></small>
                        </h2>
                    </div>
                    <hr>
                    <div class="row panel-links">
                        @foreach($project->technologies->sortBy('name') as $technology)
                        <div class="col-lg-3">
                            <div class="panel panel-default">
                                <div style="background-color:#technology->color"
                                     class="panel-color"></div>
                                <div class="panel-body">
                                    technology->name
                                    <span>
                                        <a class="pull-right" target="_blank" href="technology->url">
                                            <i style="color:#technology->color" class="fa fa-arrow-right"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div class="project-html">
                        $project->html
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>