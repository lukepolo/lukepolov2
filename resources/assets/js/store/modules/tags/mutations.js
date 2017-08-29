export const set = (state, { response }) => {
    state.tag = response;
};

export const setAll = (state, { response }) => {
    state.tags = response;
};

export const add = (state, { response }) => {
    state.tags.push(response);
};

export const update = (state, { response }) => {
    Vue.set(
        state.tags,
        parseInt(_.findKey(state.tags, { id: response.id })),
        response
    );
};

export const remove = (state, { requestData }) => {
    Vue.set(
        state,
        "tags",
        _.reject(state.tags, { id: requestData.tag })
    );
};