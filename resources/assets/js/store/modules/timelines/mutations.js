export const set = (state, { response }) => {
  state.timeline = response;
};

export const setAll = (state, { response }) => {
  state.timelines = response;
};

export const add = (state, { response }) => {
  state.timelines.push(response);
};

export const update = (state, { response }) => {
  let key = parseInt(_.findKey(state.timelines, { id: response.id }));
  if (key) {
    Vue.set(state.timelines, key, response);
  }
};

export const remove = (state, { requestData }) => {
  Vue.set(
    state,
    "timelines",
    _.reject(state.timelines, { id: requestData.value })
  );
};
