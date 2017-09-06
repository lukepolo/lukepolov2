export const get = ({}, blog) => {
    Vue.request(blog).get('/api/blogs/'+blog+'/comments', 'blog_comments/setAll')
}

export const store = ({}, form) => {
    Vue.request(form).post('/api/blogs/'+form.blog+'/comments', 'blog_comments/add')
}

export const show = ({}, blog) => {
}

export const update = ({}, form) => {

}

export const destroy = ({}, blog) => {

}