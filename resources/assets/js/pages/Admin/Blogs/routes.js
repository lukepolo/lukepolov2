import Form from './Form.vue'
import Index from './Index.vue'

export default [
    {
        path: '/admin/blogs',
        component: Index,
        name : 'admin-blogs',
    },
    {
        path: '/admin/blogs/create',
        component: Form,
        name : 'admin-blogs-create',
    },
    {
        path: '/admin/blogs/edit/:blog',
        component: Form,
        name : 'admin-blogs-edit',
    }
]
