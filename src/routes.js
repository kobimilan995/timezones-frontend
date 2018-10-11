import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Home from './components/Home.vue';
import AdminPanel from './components/admin/AdminPanel.vue';
import Users from './components/admin/Users.vue';
import Dashboard from './components/admin/Dashboard.vue';
import TimeZones from './components/admin/TimeZones.vue';

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
        component: AdminPanel,
        name: 'admin',
        meta: {
            admin: true
        },
        children: [
            {
                path: 'users',
                component: Users,
                name: 'admin_users'
            },
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'admin_dashboard'
            },
            {
                path: 'time_zones',
                component: TimeZones,
                name: 'admin_time_zones'
            }
        ]
    }
]

export default routes;
