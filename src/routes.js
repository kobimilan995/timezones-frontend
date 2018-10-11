import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Home from './components/Home.vue';
import AdminDashboard from './components/admin/Dashboard.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest: false
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            guest: true
        }
    },
    {
        path: '/admin',
        component: AdminDashboard,
        name: 'admin',
        meta: {
            admin: true
        }
    }
]

export default routes;
