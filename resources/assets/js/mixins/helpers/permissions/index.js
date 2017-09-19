export const isAdmin = function() {
  return this.isAuthed && this.isAuthed.role === "admin";
};

export const isAuthed = function() {
  return this.$store.state.auth.authed_user;
};
