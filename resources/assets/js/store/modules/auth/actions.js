export const logout = () => {
    Vue.request().post('/logout').then(() => {
        window.location.reload()
    })
}