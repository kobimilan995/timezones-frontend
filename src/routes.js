import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Home from './components/Home.vue';
import AdminPanel from './components/admin/AdminPanel.vue';
import Users from './components/admin/Users.vue';
import Dashboard from './components/admin/Dashboard.vue';
import TimeZones from './components/admin/TimeZones.vue';
import EditUser from './components/admin/EditUser.vue';
import NotFound from './components/NotFound.vue';
import CreateTimeZone from './components/main/CreateTimeZone.vue';
import ShowTimeZone from './components/main/ShowTimeZone.vue';
import UserTimeZones from './components/main/TimeZones.vue';

const routes = [
    {
        path: '/resource/not_found',
        component: NotFound,
        name: 'not_found'
    },
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        },

        children: [
            {
                path: '/timezone/create',
                name: 'timezone_create',
                component: CreateTimeZone
            },

            {
                path: '/timezone/:timezone_id',
                name: 'timezone_show',
                component: ShowTimeZone
            },

            {
                path: '/',
                name: 'show_timezones',
                component: UserTimeZones,
                meta: {
                    showAll: false
                }
            }
        ]
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
            },
            {
                path: 'user/:user_id',
                component: EditUser,
                name: 'admin_show_user'
            }
        ]
    }
]

export default routes;
