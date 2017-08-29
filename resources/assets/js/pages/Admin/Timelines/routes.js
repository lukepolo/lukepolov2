import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        component: Index,
        name : 'admin-timelines',
        path: '/admin/timelines',
    },
    {
        component: Form,
        name : 'admin-timelines-create',
        path: '/admin/timelines/create',
    },
    {
        component: Form,
        name : 'admin-timelines-edit',
        path: '/admin/timelines/edit/:timeline',
    }
]
