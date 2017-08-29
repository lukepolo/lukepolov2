import VueRouter from 'vue-router'
import routes from './../pages/routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router