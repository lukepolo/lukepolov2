import Form from "./Form.vue";
import Index from "./Index.vue";

export default [
  {
    path: "blogs",
    component: Index,
    name: "admin-blogs"
  },
  {
    path: "blogs/create",
    component: Form,
    name: "admin-blogs-create"
  },
  {
    path: "blogs/edit/:blog",
    component: Form,
    name: "admin-blogs-edit"
  }
];
