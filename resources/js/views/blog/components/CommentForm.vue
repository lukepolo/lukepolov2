<template>
  <form
    @submit.prevent="postComment"
    class="row comment-form form-horizontal"
    v-if="open"
  >
    <div class="form-group">
      <div class="col-xs-1" v-if="user.user_provider">
        <img
          class="user-image img-responsive"
          :src="user.user_provider.avatar"
        />
      </div>
      <div class="col-xs-11">
        <input
          ref="comment_input"
          class="comment-text form-control"
          :placeholder="placeholder"
          v-model="form.comment"
          @keyup.esc="cancel"
        />
      </div>
    </div>
    <div class="pull-right">
      <span
        class="comment-post btn btn-danger"
        v-if="parentComment"
        @click.prevent="cancel"
        >Cancel</span
      >
      <button class="comment-post btn btn-primary">
        <template v-if="parentComment">
          Reply
        </template>
        <template v-else>
          Post
        </template>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    blog_id: Number,
    placeholder: String,
    parentComment: Object,
    open: {
      default: false,
    },
  },
  data() {
    return {
      form: this.createForm({
        comment: null,
      }),
    };
  },
  mounted() {
    if (this.parentComment) {
      this.$refs.comment_input.focus();
    }
  },
  methods: {
    cancel() {
      this.$emit("update:open", false);
    },
    postComment() {
      let form = this.form;

      form.blog = this.blogId;

      if (this.parentComment) {
        form.parent_comment = this.parentComment.id;
      }

      this.$store
        .dispatch("blog_comments/store", form)
        .then(() => {
          this.$emit("update:open", false);
          this.$emit("updated", true);
        })
        .then(() => {
          this.form.reset();
        });
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.authed_user;
    },
    blogId() {
      if (this.blog_id) {
        return this.blog_id;
      }
      return this.$route.params.blog;
    },
  },
};
</script>
