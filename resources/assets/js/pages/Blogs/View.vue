<template>
    <div>
        <div class="container blog-container" v-if="blog">
            <div class="col-md-12 big-bottom-padding">
                <h1 class="blog-name">
                    { {{ blog.name }}
                    <router-link :to="{ name : 'admin-blogs-edit', params : { blog : blog.id } }" class="pull-right btn btn-sm btn-primary" v-if="isAdmin">
                        Edit
                    </router-link>
                </h1>
                <small>{{ parseDate(blog.created_at) }}</small><br>
                <div class="technologies">
                    <template v-for="tag in blog.tags">
                        <a href="#" class="label" :style="'background-color:'+tag.color">
                            {{ tag.name }}
                        </a>
                    </template>
                </div>
                <hr>
                <div>
                    <froalaView v-model="blog.html"></froalaView>
                </div>
            </div>
        </div>
        <comments-area :blog="blog"></comments-area>
    </div>
</template>

<script>
    import CommentsArea from './Components/CommentsArea.vue'
    export default {
        components : {
            CommentsArea
        },
        created() {
          this.$store.dispatch('blogs/show', this.$route.params.blog)
        },
        computed : {
            blog() {
                return this.$store.state.blogs.blog
            }
        }
    }
</script>