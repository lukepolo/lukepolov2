export const set = (state, { response }) => {
};

export const setAll = (state, { response, requestData }) => {

    console.warn('this wont work once we start getting more and more')
    Vue.set(state.comments, requestData.value, response)
};

export const add = (state, { response }) => {
};

export const update = (state, { response }) => {
    // let key = parseInt(_.findKey(state.blogs, { id: response.id }));
    // if(key) {
    //     Vue.set(
    //         state.blogs,
    //         key,
    //         response
    //     );
    // }
};

export const remove = (state, { requestData }) => {
    // Vue.set(
    //     state,
    //     "blogs",
    //     _.reject(state.blogs, { id: requestData.value })
    // );
};