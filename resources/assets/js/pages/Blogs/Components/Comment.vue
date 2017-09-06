<template>
    <div class="row comment-row">
        <div class="cancel pull-right comment-post btn btn-danger">Cancel</div>
        <div class="col-xs-1">
            <img class="pull-right img-responsive" src="">
        </div>
        <div class="col-xs-11 reply-area">
            <div class="row">
            <span class="user-name">
                {{ comment.user.name }}
            </span>
                <span class="timestamp">{{ comment.created_at }}</span>
            </div>
            <div class="row comment">
                {{ comment.comment }}
            </div>
            <div class="row comment-footer">
                <span class="voting" v-if="!isOwners">
                    <i class="js-up-vote-count fa fa-thumbs-o-up up-vote"> up vote count </i> |
                    <i class="js-down-vote-count fa fa-thumbs-o-down down-vote"> down vote count</i>
                </span>
                <template v-if="isAuthed">
                    &bull; <span class="btn-link reply">Reply</span>
                    <span class="btn-link edit" v-if="isOwners">Edit</span>
                    <span v-if="isAdmin">
                        &bull; <span class="btn-link delete">Delete</span>
                    </span>
                </template>

            </div>

            <comment-form :parentComment="comment" placeholder="Reply"></comment-form>

            <comment :comment="comment" v-for="comment in comment.descendants" :key="comment.id"></comment>

        </div>
    </div>
</template>

<script>
    import CommentForm from './CommentForm.vue'
    export default {
        name : 'comment',
        props : ['comment'],
        components : {
            CommentForm
        },
        computed : {
            user() {
                return this.$store.state.auth.authed_user
            },
            isOwners() {
                if(this.user && this.user === this.comment.user_id) {
                    return true
                }
                return false
            },
        }
    }
</script>