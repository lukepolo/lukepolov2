import VueRouter from 'vue-router'
import routes from './../pages/routes'

import { scrollToTop } from "../mixins/helpers/window/index"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeResolve((to, from, next) => {
    if(
        to.matched.some((match) => {
            return match.meta.admin
        }) &&
        (!store.state.auth.authed_user || store.state.auth.authed_user.role !== 'admin')
    ) {
        return next('/login')
    }

    scrollToTop(200);

    next()
})

export default router