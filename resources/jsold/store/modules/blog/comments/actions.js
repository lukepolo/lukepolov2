export const get = ({}, blog) => {
  return Vue.request().get(
    "/api/blogs/" + blog + "/comments",
    "blog_comments/setAll"
  );
};

export const store = ({}, form) => {
  return Vue.request(form).post(
    "/api/blogs/" + form.blog + "/comments",
    "blog_comments/add"
  );
};

export const update = ({}, data) => {
  return Vue.request(data.form).patch(
    "/api/blogs/" + data.blog + "/comments/" + data.comment,
    "blog_comments/update"
  );
};

export const destroy = ({}, data) => {
  return Vue.request(data).delete(
    "/api/blogs/" + data.blog + "/comments/" + data.comment,
    "blog_comments/remove"
  );
};
