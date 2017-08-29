export const set = (state, { response }) => {
    state.project = response;
};

export const setAll = (state, { response }) => {
    state.projects = response;
};

export const add = (state, { response }) => {
    state.projects.push(response);
};

export const update = (state, { response }) => {
    let key = parseInt(_.findKey(state.projects, { id: response.id }));
    if(key) {
        Vue.set(
            state.projects,
            key,
            response
        );
    }
};

export const remove = (state, { requestData }) => {
    Vue.set(
        state,
        "projects",
        _.reject(state.projects, { id: requestData.value })
    );
};