export const get = () => {
    Vue.request().get('/api/technologies', 'technologies/setAll')
}

export const store = () => {
    Vue.request().post('/api/technologies', 'technologies/add').then(() => {
        app.showSuccess('You have created a new technologies')
        app.$router.push({ name : 'admin-technologies' })
    })
}

export const show = ({}, technology) => {
    Vue.request().get('/api/technologies/' + technology, 'technologies/set')
}

export const update = ({}, form) => {
    Vue.request().put('/api/technologies/' + form.technology, 'technologies/update').then(() => {
        app.showSuccess('You have updated the technologies')
        app.$router.push({ name : 'admin-technologies' })
    })
}

export const destroy = ({}, technologies) => {
    Vue.request().delete('/api/technologies/' + technologies, 'technologies/remove').then(() => {
        app.showSuccess('You have deleted the technologies')
        app.$router.push({ name : 'admin-technologies' })
    })
}