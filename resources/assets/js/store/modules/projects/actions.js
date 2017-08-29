export const get = () => {
    Vue.request().get('/api/projects', 'projects/setAll')
}

export const store = () => {
    Vue.request().post('/api/projects', 'projects/add').then(() => {
        app.showSuccess('You have created a new project')
        app.$router.push({ name : 'admin-projects' })
    })
}

export const show = ({}, project) => {
    Vue.request().get('/api/projects/' + project, 'projects/set')
}

export const update = ({}, form) => {
    Vue.request().put('/api/projects/' + form.project, 'projects/update').then(() => {
        app.showSuccess('You have updated the project')
        app.$router.push({ name : 'admin-projects' })
    })
}

export const destroy = ({}, project) => {
    Vue.request().delete('/api/projects/' + project, 'projects/remove').then(() => {
        app.showSuccess('You have deleted the project')
        app.$router.push({ name : 'admin-projects' })
    })
}