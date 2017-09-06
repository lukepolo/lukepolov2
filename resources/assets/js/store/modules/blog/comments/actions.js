export const get = ({}, blog) => {
    Vue.request().get('/api/blogs/'+blog+'/comments', 'blog_comments/setAll')
}

export const store = ({}, form) => {
    Vue.request(form).post('/api/blogs/'+form.blog+'/comments', 'blog_comments/add')
}

export const update = ({}, data) => {
    Vue.request(data).post('/api/blogs/'+data.blog+'/comments/'+data.comment, 'blog_comments/update')
}

export const destroy = ({}, data) => {
    Vue.request(data).delete('/api/blogs/'+data.blog+'/comments/'+data.comment, 'blog_comments/remove')
}