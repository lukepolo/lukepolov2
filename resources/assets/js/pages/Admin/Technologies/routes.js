import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        component: Index,
        name : 'admin-technologies',
        path: '/admin/technologies',
    },
    {
        component: Form,
        name : 'admin-technologies-create',
        path: '/admin/technologies/create',
    },
    {
        component: Form,
        name : 'admin-technologies-edit',
        path: '/admin/technologies/edit/:technology',
    }
]
