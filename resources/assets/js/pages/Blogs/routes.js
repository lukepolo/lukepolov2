import View from './View.vue'
import Index from './Index.vue'

export default [
    {
        path: '/blogs',
        component: Index,
        name : 'blogs',
    },
    {
        path: '/blog/:blog',
        component: View,
        name : 'blog',
    },
]
