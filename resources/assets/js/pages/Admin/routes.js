import Tags from './Tags/routes'
import Blogs from './Blogs/routes'
import AdminArea from './AdminArea.vue'
import Projects from './Projects/routes'
import Dashboard from './Dashboard/routes'
import Timelines from './Timelines/routes'
import Technologies from './Technologies/routes'

export default [
    {
        path: "/admin",
        component: AdminArea,
        children: [
            ...Tags,
            ...Blogs,
            ...Projects,
            ...Dashboard,
            ...Timelines,
            ...Technologies,
        ],
        meta: {
            admin: true
        }
    }
]
