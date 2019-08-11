<template>
  <div class="col-sm-12 comment-row" v-if="comment.user">
    <div class="col-xs-1 hidden-md" v-if="comment.user.user_provider">
      <img
        class="user-image img-responsive"
        :src="comment.user.user_provider.avatar"
      />
    </div>
    <div class="col-xs-11 reply-area">
      <div class="row">
        <span class="user-name">
          {{ comment.user.name }}
        </span>
        <span class="timestamp">
          <time-ago :time="comment.created_at"></time-ago>
        </span>
      </div>
      <div class="row comment">
        <template v-if="!editing">
          {{ comment.comment }}
        </template>
        <template v-else>
          <form @submit.prevent="update">
            <div class="form-group">
              <input class="form-control" v-model="form.comment" />
            </div>
            <div
              class="cancel comment-post btn btn-danger"
              @click="editing = false"
            >
              Cancel
            </div>
            <button class="comment-post btn btn-primary">Update</button>
          </form>
        </template>
      </div>
      <div class="row comment-footer">
        <!--<span class="voting" v-if="!isOwners">-->
        <!--<i class="js-up-vote-count fa fa-thumbs-o-up up-vote"> up vote count </i> |-->
        <!--<i class="js-down-vote-count fa fa-thumbs-o-down down-vote"> down vote count</i>-->
        <!--</span>-->
        <template v-if="isAuthed">
          &bull; <span class="btn-link reply" @click="reply = true">Reply</span>
          <template v-if="isOwners">
            &bull;
            <span class="btn-link edit" @click="editing = true">Edit</span>
          </template>
          <span v-if="isAdmin">
            &bull;
            <span class="btn-link delete" @click="deleteComment">Delete</span>
          </span>
        </template>

        <comment-form
          v-on:updated="emitUpdated"
          :blog_id="comment.blog_id"
          :parentComment="comment"
          placeholder="Reply"
          :open.sync="reply"
          v-if="reply"
        ></comment-form>
      </div>
      <comment
        :comment="comment"
        v-for="comment in comment.children"
        :key="comment.id"
      ></comment>
    </div>
  </div>
</template>

<script>
import CommentForm from "./CommentForm.vue";
export default {
  name: "comment",
  props: ["comment"],
  components: {
    CommentForm,
  },
  data() {
    return {
      reply: false,
      editing: false,
      form: this.createForm({
        comment: this.comment.comment,
      }),
    };
  },
  methods: {
    update() {
      this.$store
        .dispatch("blog_comments/update", {
          form: this.form,
          comment: this.comment.id,
          blog: this.comment.blog_id,
        })
        .then(() => {
          this.editing = false;
          this.emitUpdated();
        });
    },
    deleteComment() {
      this.$store
        .dispatch("blog_comments/destroy", {
          comment: this.comment.id,
          parent: this.comment.parent_id,
          blog: this.$route.params.blog,
        })
        .then(() => {
          this.emitUpdated();
        });
    },
    emitUpdated() {
      this.$emit("updated", true);
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.authed_user;
    },
    isOwners() {
      if (this.user && this.user.id === this.comment.user_id) {
        return true;
      }
      return false;
    },
  },
};
</script>
