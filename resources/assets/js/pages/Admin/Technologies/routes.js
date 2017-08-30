import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        path: 'technologies',
        component: Index,
        name : 'admin-technologies',
    },
    {
        path: 'technologies/create',
        component: Form,
        name : 'admin-technologies-create',
    },
    {
        path: 'technologies/edit/:technology',
        component: Form,
        name : 'admin-technologies-edit',
    }
]
