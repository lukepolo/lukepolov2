import Home from './Home/routes'
import Admin from './Admin/routes'
import Blogs from './Blogs/routes'

import Login from './Login.vue'
import Resume from './Resume.vue'

let routes = [
    ... Home,
    ... Admin,
    ... Blogs,
    {
        path: '/login', component: Login, name : 'login',
    },
    {
        path: '/resume', component: Resume, name : 'resume',
    }
]

export default routes
