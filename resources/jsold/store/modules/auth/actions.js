export const logout = () => {
  return Vue.request()
    .post("/logout")
    .then(() => {
      window.location.reload();
    });
};
