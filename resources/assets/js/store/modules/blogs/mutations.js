export const set = (state, { response }) => {
    state.blog = response;
};

export const setAll = (state, { response }) => {
    state.pagination = response;
    state.blogs = response.data;
};

export const add = (state, { response }) => {
    state.blogs.push(response);
};

export const update = (state, { response }) => {
    let key = parseInt(_.findKey(state.blogs, { id: response.id }));
    if(key) {
        Vue.set(
            state.blogs,
            key,
            response
        );
    }
};

export const remove = (state, { requestData }) => {
    Vue.set(
        state,
        "blogs",
        _.reject(state.blogs, { id: requestData.value })
    );
};