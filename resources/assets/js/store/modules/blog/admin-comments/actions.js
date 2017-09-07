export const get = ({}, queryString) => {
    return Vue.request(queryString).get('/api/admin/blog-comments', 'admin_blog_comments/setAll')
}

export const update = ({}, data) => {
    return Vue.request(data.form).patch('/api/admin/blog-comments/'+data.comment)
}