export const get = () => {
    Vue.request().get('/api/projects')
}