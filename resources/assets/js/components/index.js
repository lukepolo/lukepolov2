require('./froala')
require('./flatPickr')

Vue.component('Footer', require('./Footer.vue'))
Vue.component('Navigation', require('./Navigation.vue'))
Vue.component('Notifications', require('./Notifications.vue'))
Vue.component('AdminNavigation', require('./AdminNavigation.vue'))

Vue.component('Project', require('./Project.vue'))
Vue.component('GitTree', require('./GitTree.vue'))



import { Material } from 'vue-color'

Vue.component('material-picker', Material)



