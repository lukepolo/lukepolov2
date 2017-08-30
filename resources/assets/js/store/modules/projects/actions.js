export const get = () => {
    Vue.request().get('/api/projects', 'projects/setAll')
}

export const store = ({}, form) => {
    Vue.request(form).post('/api/projects', 'projects/add').then(() => {
        app.showSuccess('You have created a new project')
        app.$router.push({ name : 'admin-projects' })
    })
}

export const show = ({}, project) => {
    Vue.request().get('/api/projects/' + project, 'projects/set')
}

export const update = ({}, data) => {
    Vue.request(data).post('/api/projects/' + data.project, 'projects/update').then(() => {
        app.showSuccess('You have updated the project')
        app.$router.push({ name : 'admin-projects' })
    })
}

export const destroy = ({}, project) => {
    Vue.request(project).delete('/api/projects/' + project, 'projects/remove').then(() => {
        app.showSuccess('You have deleted the project')
        app.$router.push({ name : 'admin-projects' })
    })
}