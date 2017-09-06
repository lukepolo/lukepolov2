export const get = () => {
    Vue.request().get('/api/tags', 'tags/setAll')
}

export const store = ({}, form) => {
    console.info(form)
    Vue.request(form).post('/api/tags', 'tags/add').then(() => {
        app.showSuccess('You have created a new tag')
        app.$router.push({ name : 'admin-tags' })
    })
}

export const show = ({}, tag) => {
    Vue.request().get('/api/tags/' + tag, 'tags/set')
}

export const update = ({}, form) => {
    Vue.request(form).put('/api/tags/' + form.tag, 'tags/update').then(() => {
        app.showSuccess('You have updated the tag')
        app.$router.push({ name : 'admin-tags' })
    })
}

export const destroy = ({}, tag) => {
    Vue.request(tag).delete('/api/tags/' + tag, 'tags/remove').then(() => {
        app.showSuccess('You have deleted the tag')
        app.$router.push({ name : 'admin-tags' })
    })
}