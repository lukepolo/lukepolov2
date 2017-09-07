export const get = ({}, queryString) => {
    Vue.request(queryString).get('/api/admin/blog-comments', 'admin_blog_comments/setAll')
}

export const update = ({}, data) => {
    Vue.request(data.form).patch('/api/blog-comments/'+data.comment, 'admin_blog_comments/update')
}