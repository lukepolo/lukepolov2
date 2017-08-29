export const get = () => {
    Vue.request().get('/api/timelines', 'timelines/setAll')
}

export const store = ({}, data) => {
    Vue.request(data).post('/api/timelines', 'timelines/add').then(() => {
        app.showSuccess('You have created a new timeline')
        app.$router.push({ name : 'admin-timelines' })
    })
}

export const show = ({}, timeline) => {
    Vue.request().get('/api/timelines/' + timeline, 'timelines/set')
}

export const update = ({}, form) => {
    Vue.request(form).put('/api/timelines/' + form.timeline, 'timelines/update').then(() => {
        app.showSuccess('You have updated the timeline')
        app.$router.push({ name : 'admin-timelines' })
    })
}

export const destroy = ({}, timeline) => {
    Vue.request(timeline).delete('/api/timelines/' + timeline, 'timelines/remove').then(() => {
        app.showSuccess('You have deleted the timeline')
        app.$router.push({ name : 'admin-timelines' })
    })
}