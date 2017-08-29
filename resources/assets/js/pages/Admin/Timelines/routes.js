import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        path: '/admin/timelines', component: Index, name : 'admin-timelines',
    },
    {
        path: '/admin/timelines/create', component: Form, name : 'admin-timelines-create',
    },
    {
        path: '/admin/timelines/edit', component: Form, name : 'admin-timelines-edit',
    }
]
