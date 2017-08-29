export const set = (state, { response }) => {
    state.technologies = response;
};

export const setAll = (state, { response }) => {
    state.technologiess = response;
};

export const add = (state, { response }) => {
    state.technologiess.push(response);
};

export const update = (state, { response }) => {
    Vue.set(
        state.technologiess,
        parseInt(_.findKey(state.technologiess, { id: response.id })),
        response
    );
};

export const remove = (state, { requestData }) => {
    Vue.set(
        state,
        "technologiess",
        _.reject(state.technologiess, { id: requestData.technologies })
    );
};