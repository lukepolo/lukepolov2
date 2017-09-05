import Home from './Home.vue'
import Resume from './Resume.vue'

import Blogs from './Blogs/routes'
import Admin from './Admin/routes'

let routes = [
    ... Admin,
    ... Blogs,
    {
        path: '/', component: Home, name : 'home',
        path: '/resume', component: Resume, name : 'resume',
    }
]

export default routes
