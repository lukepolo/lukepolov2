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
                <!--@if(!\Auth::check() || $comment->user_id != \Auth::user()->id)-->
                <span class="voting">
                    <i class="js-up-vote-count fa fa-thumbs-o-up up-vote"> up vote count </i> |
                    <i class="js-down-vote-count fa fa-thumbs-o-down down-vote"> down vote count</i>
                </span>
                <template v-if="isAuthed">
                    &bull; <span class="btn-link reply">Reply</span>
                    <!--<span data-id="{{ $comment->id }}" class="btn-link edit">Edit</span>-->
                    <span v-if="isAdmin">
                        &bull; <span class="btn-link delete">Delete</span>
                    </span>
                </template>

            </div>

            <comment-form :parentComment="comment" placeholder="Reply"></comment-form>

            <comment :comment="comment" v-for="comment in comment.descendants"></comment>
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
        data() {
            return {
                form : this.createForm({
                    comment : null
                })
            }
        },
        methods : {
            postComment() {
                alert('post it')
            }
        }

    }
</script>