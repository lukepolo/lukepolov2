import store from './store'
import router from './router'

require('./bootstrap');
require('./components')
require('./mixins')

const app = new Vue({
    store,
    router,
})

window.app = app

app.$mount('#app')