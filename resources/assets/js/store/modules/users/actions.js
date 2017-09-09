export const get = () => {
    return Vue.request().get('/api/users', 'users/setAll')
}

export const destroy = ({}, timeline) => {
    return Vue.request(timeline).delete('/api/users/' + timeline, 'users/remove').then(() => {
        app.showSuccess('You have deleted the user')
    })
}