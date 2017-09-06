<template>
    <form @submit.prevent="postComment" class="row comment-form form-horizontal" v-if="open">
        <div class="form-group">
            <div class="col-xs-1">
                <img class="pull-right user-image img-responsive" src="#">
            </div>
            <div class="col-xs-11">
                <input class="comment-text form-control" :placeholder="placeholder" v-model="form.comment">
            </div>
        </div>
        <button class="pull-right comment-post btn btn-primary">Post</button>
    </form>
</template>

<script>
    export default {
        props : {
            parentComment : Object,
            placeholder : String,
            open : {
                default : false
            }
        },
        data() {
            return {
                form : this.createForm({
                    comment : null
                })
            }
        },
        methods : {
            postComment() {
                let form = this.form

                form.blog = this.blogId

                if(this.parentComment) {
                    form.parent_comment = this.parentComment.id
                }

                this.$store.dispatch('blog_comments/store', form).then(() => {
                    this.$emit('update:open', false)
                })

            }
        },
        computed : {
            blogId() {
                return this.$route.params.blog
            },
        }
    }
</script>