<template>
    <div>
        <div class="blog-container col-md-10">
            <div class="row" v-if="form.filters.length">
                <a class="label clear-filter">Clear Filters</a>
            </div>

            <blog-card :blog="blog" v-for="blog in blogs" :key="blog.id"></blog-card>

            <div class="row" v-if="blogs.length === 0">
                <h2>Oh no, there are no blogs with that filter . . .</h2>
            </div>
        </div>
        <div class="col-md-2">
            <div class="row text-center">
                <select v-model="form.filters" multiple></select>
            </div>
            <div class="row">
                <hr>
                <div class="col-sm-12 tags-area">
                    <!--@foreach($tags as $tag)-->
                    <!--@if(\Request::get('filter') != $tag->name)-->
                    <!--<a style="background-color:#{{ $tag->color }}" class="label pull-right" href="{{ action('BlogController@getPublicIndex', ['filter' => $tag->name]) }}">{{ $tag->name }}</a>-->
                    <!--@endif-->
                    <!--@endforeach-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlogCard from './Components/BlogCard.vue'
    export default {
        components : {
            BlogCard
        },
        data() {
          return {
              form: this.createForm({
                  filters: []
              })
          }
        },
        created() {
            this.$store.dispatch('blogs/get')
        },
        computed : {
            blogs() {
                return this.$store.state.blogs.blogs
            }
        }
    }
</script>