<template>
    <div class="col-md-12 comment-area ">
        <nav class="navbar row">
            <ul class="nav navbar-nav">
                <li>
                    <p class="navbar-text"><span class="total_count"></span> Comments</p>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <template v-if="!isAuthed">
                    <li>
                        <div class="navbar-text">
                            Login to comment :
                        </div>
                    </li>
                    <li>
                        <a href="/oauth/google">
                            <i class="fa fa-google"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/oauth/github">
                            <i class="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/oauth/twitter">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                </template>
            </ul>
        </nav>

        <template v-if="isAuthed">
           <comment-form :placeholder="blogComments ? 'Join the discussion ...' : 'Start the discussion ...'" open="true"></comment-form>
        </template>

        <div class="comments row">
            <comment :comment="comment" v-for="comment in blogComments" :key="comment.id"></comment>
            <hr>
        </div>

    </div>

</template>

<script>
    import Comment from './Comment.vue'
    import CommentForm from './CommentForm.vue'
    export default {
        components : {
            Comment,
            CommentForm
        },
        props : [ 'blog' ],
        watch: {
            'blog' : function() {
                this.$store.dispatch('blog_comments/get', this.blog.id)
            }
        },
        computed: {
            user() {
                return this.$store.state.auth.authed_user
            },
            blogComments() {
                if(this.blog) {
                    return this.$store.state.blog_comments.comments[this.blog.id]
                }
            }
        }
    }
</script>