export const get = () => {
  return Vue.request().get("/api/technologies", "technologies/setAll");
};

export const store = ({}, form) => {
  return Vue.request(form)
    .post("/api/technologies", "technologies/add")
    .then(() => {
      app.showSuccess("You have created a new technologies");
      app.$router.push({ name: "admin-technologies" });
    });
};

export const show = ({}, technology) => {
  return Vue.request().get(
    "/api/technologies/" + technology,
    "technologies/set"
  );
};

export const update = ({}, form) => {
  return Vue.request(form)
    .put("/api/technologies/" + form.technology, "technologies/update")
    .then(() => {
      app.showSuccess("You have updated the technologies");
      app.$router.push({ name: "admin-technologies" });
    });
};

export const destroy = ({}, technologies) => {
  return Vue.request(technologies)
    .delete("/api/technologies/" + technologies, "technologies/remove")
    .then(() => {
      app.showSuccess("You have deleted the technologies");
      app.$router.push({ name: "admin-technologies" });
    });
};
