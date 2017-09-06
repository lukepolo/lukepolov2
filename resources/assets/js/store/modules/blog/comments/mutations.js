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

export const setAll = (state, { response }) => {
    if(response.length) {
        Vue.set(state.comments, response[0].blog_id, response)
    }
};

export const add = (state, { response }) => {
    if(response.parent_id) {
        let parentComment = findParentComment(state.comments[response.blog_id], response.parent_id)
        if(parentComment) {
            parentComment.children.push(response)
        } else {
            console.info('cant find parent')
            console.info(response)
        }

    } else {
        state.comments[response.blog_id].push(response)
    }
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