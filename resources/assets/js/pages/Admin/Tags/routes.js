import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        path: '/admin/tags',
        component: Index,
        name : 'admin-tags',
    },
    {
        path: '/admin/tags/create',
        component: Form,
        name : 'admin-tags-create',
    },
    {
        path: '/admin/tags/edit',
        component: Form,
        name : 'admin-tags-edit',
    }
]
