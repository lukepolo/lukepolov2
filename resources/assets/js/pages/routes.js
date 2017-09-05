import Home from './Home/routes'
import Admin from './Admin/routes'
import Blogs from './Blogs/routes'

import Resume from './Resume.vue'

let routes = [
    ... Home,
    ... Admin,
    ... Blogs,
    {
        path: '/resume', component: Resume, name : 'resume',
    }
]

export default routes
