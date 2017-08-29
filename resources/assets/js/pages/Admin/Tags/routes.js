import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        path: '/admin/projects', component: Index, name : 'admin-projects',
    },
    {
        path: '/admin/projects/create', component: Form, name : 'admin-projects-create',
    },
    {
        path: '/admin/projects/edit', component: Form, name : 'admin-projects-edit',
    }
]
