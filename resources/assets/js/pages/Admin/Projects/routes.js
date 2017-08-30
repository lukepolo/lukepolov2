import Form from './Form.vue';
import Index from './Index.vue';

export default [
    {
        path: 'projects',
        component: Index,
        name : 'admin-projects',
    },
    {
        path: 'projects/create',
        component: Form,
        name : 'admin-projects-create',
    },
    {
        path: 'projects/edit/:project',
        component: Form,
        name : 'admin-projects-edit',
    }
];
