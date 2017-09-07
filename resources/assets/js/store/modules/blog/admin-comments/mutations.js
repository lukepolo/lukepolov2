export const setAll = (state, { response }) => {
    Vue.set(state, 'pagination', response)
    Vue.set(state, 'comments', response.data)
};

export const update = (state, { response }) => {
    // remove from moderation
};
