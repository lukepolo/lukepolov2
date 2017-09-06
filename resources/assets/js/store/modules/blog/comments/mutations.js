export const setAll = (state, { response }) => {
    if(response.length) {
        Vue.set(state.comments, response[0].blog_id, response)
    }
};

export const add = (state, { response }) => {
    let blog = response.blog_id;

    if(response.parent_id) {
        let parentComment = findParentComment(state.comments[blog], response.parent_id)
        if(parentComment) {
            parentComment.children.push(response)
        }
    } else {
        if(!state.comments[blog]) {
            Vue.set(state.comments, blog, [])
            state.comments[blog] = []
        }
        state.comments[blog].push(response)
    }
};

export const update = (state, { response }) => {
    if(response.parent_id) {
        let parentComment = findParentComment(state.comments[response.blog_id], response.parent_id)
        if(parentComment) {
            Vue.set(parentComment.children, _.findKey(parentComment.children, { id: response.id }), response)
        }
    } else {
        Vue.set(state.comments[response.blog_id], _.findKey(state.comments[response.blog_id], { id : response.id }), response)
    }
};

export const remove = (state, { requestData }) => {
    if(requestData.parent) {
        let parentComment = findParentComment(state.comments[requestData.blog], requestData.parent)
        if(parentComment) {
            Vue.set(parentComment, 'children', _.reject(parentComment.children, { id: requestData.comment }))
        }
    } else {
        Vue.set(state.comments, requestData.blog, _.reject(state.comments[requestData.blog], { id : requestData.comment }))
    }
};

function findParentComment(comments, parentId) {
    for (let i = 0; i < comments.length; i++) {
        if(comments[i].id === parentId) {
            return comments[i];
        }
        let parentComment = findParentComment(comments[i].children, parentId)
        if(parentComment) {
            return parentComment
        }
    }
}
