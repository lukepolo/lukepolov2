import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        path: 'tags',
        component: Index,
        name : 'admin-tags',
    },
    {
        path: 'tags/create',
        component: Form,
        name : 'admin-tags-create',
    },
    {
        path: 'tags/edit',
        component: Form,
        name : 'admin-tags-edit',
    }
]
