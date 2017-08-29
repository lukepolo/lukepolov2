import Home from './Home.vue'

import Blogs from './Blogs/routes'
import Admin from './Admin/routes'

let routes = [
    ... Admin,
    ... Blogs,
    {
        path: '/', component: Home, name : 'home',
    }
]

export default routes
