export const setAll = (state, { response }) => {
  if (response.length) {
    Vue.set(state.comments, response[0].blog_id, response);
  }
};

export const add = (state, { response }) => {
  let blog = response.blog_id;

  let comments = state.comments[blog];

  if (response.parent_id) {
    let parentComment = findParentComment(comments, response.parent_id);
    if (parentComment) {
      parentComment.children.push(response);
    }
  } else {
    if (!comments) {
      Vue.set(state.comments, blog, []);
      comments = state.comments[blog] = [];
    }
    comments.push(response);
  }
};

export const update = (state, { response }) => {
  let comments = state.comments[response.blog_id];

  if (comments) {
    if (response.parent_id) {
      let parentComment = findParentComment(comments, response.parent_id);
      if (parentComment) {
        Vue.set(
          parentComment.children,
          _.findKey(parentComment.children, { id: response.id }),
          response
        );
      }
    } else {
      Vue.set(comments, _.findKey(comments, { id: response.id }), response);
    }
  }
};

export const remove = (state, { requestData }) => {
  let comments = state.comments[requestData.blog];
  if (comments) {
    if (requestData.parent) {
      let parentComment = findParentComment(comments, requestData.parent);
      if (parentComment) {
        Vue.set(
          parentComment,
          "children",
          _.reject(parentComment.children, { id: requestData.comment })
        );
      }
    } else {
      Vue.set(
        state.comments,
        requestData.blog,
        _.reject(comments, { id: requestData.comment })
      );
    }
  }
};

function findParentComment(comments, parentId) {
  if (comments) {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === parentId) {
        return comments[i];
      }
      let parentComment = findParentComment(comments[i].children, parentId);
      if (parentComment) {
        return parentComment;
      }
    }
  }
}
