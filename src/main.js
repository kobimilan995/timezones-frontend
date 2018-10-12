import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
import Notifications from 'vue-notification'
import VuejsDialog from 'vuejs-dialog';
window.moment = moment;

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';


//vue uses
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Notifications);
Vue.use(VuejsDialog);


Vue.config.productionTip = false


//set api url based on production/development environment
if(process.env.NODE_ENV == 'development') {
    window.api_url = "http://localhost:8000";
} else {
    window.api_url = "https://gentle-atoll-38274.herokuapp.com";
}


/*
ROUTER
*/
import routes from './routes'

const router = new VueRouter({
    routes
})



//redirects if not authenticated
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('auth-token') == null) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('auth-token') == null){
            next()
        }
        else{
            next('/')
        }
    } else if(to.matched.some(record => record.meta.admin)) {
        let user = JSON.parse(localStorage.getItem('auth-user'));
        if(user.role_name != 'Admin') {
            next({
                name: 'home'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})



/*
VUEX
*/
import storeObject from './vuex/index';
const store = new Vuex.Store(storeObject);


/*
AXIOS
*/
window.axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
