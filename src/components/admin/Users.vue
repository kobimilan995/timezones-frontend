<template>
    <div>
        <input v-model="search_query" type="text" class="form-control col-md-4 offset-md-4" placeholder="Filter users">
        <div v-if="!loading">
            <br>
            <div class="row">
                <div class="card col-md-3" v-for="(user, index) in users">
                    <user-component :user="user" :key="index" :loop_index="index"></user-component>
                </div>
            </div>
        </div>
        <div v-else style="align-content: center;">
            <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>
        </div>
    </div>

</template>

<script>
import User from './User.vue';
export default {
    data() {
        return {
            users: [],
            search_query: '',
            loading: false
        }
    },
    components: {
        'user-component': User
    },
    created() {
        this.fetchUsers();
    },

    methods: {
        fetchUsers() {
            this.loading = true;
            axios.get(window.api_url+'/api/admin/users?query='+this.search_query).then(response => {
                // console.log(response.data);
                this.users = response.data.users;
                this.loading = false;
            }).catch(error => {
                console.log(error);
            });
        }
    },

    watch: {
        search_query() {
            this.fetchUsers();
        }
    }
}
</script>
