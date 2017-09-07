<template>
    <div class="container">
        <div class="col-md-12 big-bottom-padding" v-if="blog">
            <h1 class="blog-name">
                { {{ blog.name }}
                <router-link :to="{ name : 'admin-blogs-edit', params : { blog : blog.id } }" class="pull-right btn btn-sm btn-primary" v-if="isAdmin">
                    Edit
                </router-link>
            </h1>
            <small>{{ parseDate(blog.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a') }}</small><br>
            <div class="technologies">
                <template v-for="tag in blog.tags">
                    <a href="#" class="label" :style="'background-color:'+tag.color">
                        {{ tag.name }}
                    </a>
                </template>
            </div>
            <hr>
            <img class="img-responsive blog-image center-block" :src="blog.blog_image">
            <froalaView v-model="blog.html"></froalaView>
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
            let blog = this.$route.params.blog

            Echo.leave('blog.*');

            Echo
                .channel('blog.'+blog)
                .listen('CommentCreated', (data) => {
                    this.$store.commit('blog_comments/add', {
                        response : data.comment
                    })
                })
                .listen('CommentUpdated', (data) => {
                    this.$store.commit('blog_comments/update', {
                        response : data.comment
                    })
                })
                .listen('CommentDeleted', (data) => {
                    this.$store.commit('blog_comments/remove', {
                        requestData : {
                            comment : data.comment.id,
                            blog : data.comment.blog_id,
                            parent : data.comment.parent_id,
                        }
                    })
                })
            this.$store.dispatch('blogs/show', blog)
        },
        computed : {
            blog() {
                return this.$store.state.blogs.blog
            }
        }
    }
</script>