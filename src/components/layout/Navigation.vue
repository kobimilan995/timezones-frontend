<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class=" navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
            </ul>
            <ul class="navbar-nav my-lg-0" v-if="!token">
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">Login</a> -->
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/register" class="nav-link">Register</router-link>
                </li>
            </ul>
            <ul class="navbar-nav my-lg-0" v-else>
                <li class="nav-item" style="padding-top: 8px;">
                    <h5 class="mr-4">{{authUser.first_name}} {{authUser.last_name}} - ({{authUser.role_name}})</h5>
                </li>
                <li class="nav-item" v-if="authUser.role_name == 'Admin'">
                    <router-link :to="{name: 'admin_dashboard'}" class="nav-link">Admin dashboard</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    computed: {
        token() {
            return this.$store.state.auth.token;
        },

        authUser() {
            return this.$store.state.auth.user;
        }
    },

    methods: {
        logout() {
            this.removeToken();
            this.$notify({
                group: 'notify',
                title: 'Success',
                text: 'Sucesfully logged out!',
                type: 'success'
            });
            // axios.delete(window.api_url+'/api/logout').then(response => {
            //
            //
            // }).catch(error => {
            //     let {data} = error.response.data;
            //     this.$notify({
            //         group: 'notify',
            //         title: 'Success',
            //         text: data[Object.keys(data)[0]][0],
            //         type: 'success'
            //     });
            //     this.removeToken();
            // });

        },

        removeToken() {
            localStorage.removeItem('auth-token');
            localStorage.removeItem('auth-user');
            this.$store.commit('auth/SET_TOKEN', '');
            this.$store.commit('auth/SET_USER', {});
            axios.defaults.headers.common['Authorization'] = 'Bearer ';
            this.$router.push({name: 'login'});
        }
    }

}
</script>
