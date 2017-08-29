import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        path: '/admin/technologies',
        component: Index,
        name : 'admin-technologies',
    },
    {
        path: '/admin/technologies/create',
        component: Form,
        name : 'admin-technologies-create',
    },
    {
        path: '/admin/technologies/edit/:technology',
        component: Form,
        name : 'admin-technologies-edit',
    }
]
