<template>
    <section>
        <div class="blog row">
            <div class="col-md-12">
                <h1 class="blog-name">
                    <router-link :to="{ name : 'blog', params : { blog : blog.id } }">
                        { {{ blog.name }}
                    </router-link>
                </h1>
                <small>{{ parseDate(blog.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a') }}</small>
                <div class="technologies">
                    <template v-for="tag in blog.tags">
                    <span class="label" :style="'background-color:' + tag.color">
                        {{ tag.name }}
                    </span>
                    </template>
                </div>
            </div>
            <div class="col-md-12">
                <a>
                    <img class="img-responsive blog-image center-block" :src="blog.blog_image">
                </a>
            </div>
            <div class="col-md-12">
                <p>
                    <froalaView v-model="blog.preview_text"></froalaView>
                </p>
            </div>
            <div class="col-md-12">
                <router-link class="pull-right" :to="{ name : 'blog', params : { blog : blog.id } }">
                    Continue Reading ...
                </router-link>
            </div>
        </div>
        <hr>
    </section>
</template>

<script>
    export default {
        props : [ 'blog' ]
    }
</script>