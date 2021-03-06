export const set = (state, { response }) => {
  state.technology = response;
};

export const setAll = (state, { response }) => {
  state.technologies = response;
};

export const add = (state, { response }) => {
  state.technologies.push(response);
};

export const update = (state, { response }) => {
  let key = parseInt(_.findKey(state.technologies, { id: response.id }));
  if (key) {
    Vue.set(state.technologies, key, response);
  }
};

export const remove = (state, { requestData }) => {
  Vue.set(
    state,
    "technologies",
    _.reject(state.technologies, { id: requestData.value })
  );
};
