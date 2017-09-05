export const set = (state, { response }) => {
    state.authed_user = response;
}