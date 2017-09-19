import Form from "./Form.vue";
import Index from "./Index.vue";

export default [
  {
    path: "timelines",
    component: Index,
    name: "admin-timelines"
  },
  {
    path: "timelines/create",
    component: Form,
    name: "admin-timelines-create"
  },
  {
    path: "timelines/edit/:timeline",
    component: Form,
    name: "admin-timelines-edit"
  }
];
