export const get = ({}, filters) => {
    Vue.request(filters).get('/api/blogs', 'blogs/setAll')
}

export const store = ({}, form) => {
    Vue.request(form).post('/api/blogs', 'blogs/add').then(() => {
        app.showSuccess('You have created a new blog')
        app.$router.push({ name : 'admin-blogs' })
    })
}

export const show = ({}, blog) => {
    Vue.request().get('/api/blogs/' + blog, 'blogs/set')
}

export const update = ({}, form) => {
    Vue.request(form).post('/api/blogs/' + form.blog, 'blogs/update').then(() => {
        app.showSuccess('You have updated the blog')
        app.$router.push({ name : 'admin-blogs' })
    })
}

export const destroy = ({}, blog) => {
    Vue.request(blog).delete('/api/blogs/' + blog, 'blogs/remove').then(() => {
        app.showSuccess('You have deleted the blog')
        app.$router.push({ name : 'admin-blogs' })
    })
}