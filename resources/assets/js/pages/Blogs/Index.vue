<template>
    <div>
        <div class="blog-container col-md-10">
            <!--@if(\Request::has('filter'))-->
            <div class="row">
                <a class="label clear-filter">Clear Filters</a>
            </div>

            <div class="blog">
                <div class="row">
                    <h1 class="blog-name">
                        <a >{  $blog->name </a>
                    </h1>
                    <small>$blog->created_at->format('F jS Y g:i A')</small>
                    <div class="technologies">
                        @foreach($blog->tags as $tag)
                        <span class="label" style="background-color:#tag-color">
                                    $tag->name
                                </span>
                        @endforeach
                    </div>
                </div>
                <div class="row">
                    <a>
                        <img class="img-responsive blog-image center-block" src="$blog->image">
                    </a>
                </div>
                <div class="row">
                    <p>
                        preview text
                    </p>
                </div>
                <div class="row">
                    <a class="pull-right continue-reading">
                        Continue Reading ...
                    </a>
                </div>
                <hr>
            </div>

            <div class="row">
                <h2>Oh no, there are no blogs with that filter . . .</h2>
            </div>
        </div>
        <div class="col-md-2">
            <div class="row text-center">
                <select id="blog-search" multiple></select>
            </div>
            <div class="row">
                <hr>
                <!--<div class="col-sm-12 tags-area">-->
                    <!--@foreach($tags as $tag)-->
                    <!--@if(\Request::get('filter') != $tag->name)-->
                    <!--<a style="background-color:#{{ $tag->color }}" class="label pull-right" href="{{ action('BlogController@getPublicIndex', ['filter' => $tag->name]) }}">{{ $tag->name }}</a>-->
                    <!--@endif-->
                    <!--@endforeach-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed : {
            created() {
                this.$store.dispatch('blogs/get')
            },
            blogs() {
                return this.$store.state.blogs.blogs
            }
        }
    }
</script>