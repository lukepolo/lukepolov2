export const setAll = (state, { response }) => {
    state.users = response.data;
    state.pagination = response;
};