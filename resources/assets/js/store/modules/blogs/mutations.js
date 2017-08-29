export const set = (state, { response }) => {
    state.blog = response;
};

export const setAll = (state, { response }) => {
    state.blogs = response;
};

export const add = (state, { response }) => {
    state.blogs.push(response);
};

export const update = (state, { response }) => {
    Vue.set(
        state.blogs,
        parseInt(_.findKey(state.blogs, { id: response.id })),
        response
    );
};

export const remove = (state, { requestData }) => {
    Vue.set(
        state,
        "blogs",
        _.reject(state.blogs, { id: requestData.blog })
    );
};