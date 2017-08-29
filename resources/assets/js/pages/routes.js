import Home from './Home.vue'

import Admin from './Admin/Projects/routes'

let routes = [
    ... Admin,
    {
        path: '/', component: Home, name : 'home',
    }
]

export default routes
