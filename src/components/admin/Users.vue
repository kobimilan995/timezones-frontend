<template>
    <div>
        <input v-model="search_query" type="text" class="form-control col-md-4 offset-md-4" placeholder="Filter users">
        <div v-if="!loading">
            <br>
            <div class="row">
                <div class="card col-md-3" v-for="(user, index) in users">
                    <user-component @userDeleted="removeUser" :user="user" :key="index" :loop_index="index"></user-component>
                </div>
            </div>
        </div>
        <div v-else style="align-content: center;">
            <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>
        </div>
        <pagination class="mt-4" v-model="currentPage" :records="usersCount" :per-page="perPage" @paginate="paginateUsers"></pagination>
    </div>

</template>

<script>
import User from './User.vue';
import Pagination from 'vue-pagination-2';
export default {
    data() {
        return {
            users: [],
            search_query: '',
            loading: false,
            currentPage: 1,
            usersCount: 0,
            lastPage: 0,
            perPage: 12
        }
    },
    components: {
        'user-component': User,
        Pagination
    },
    created() {
        this.fetchUsers();
    },

    methods: {
        fetchUsers() {
            this.loading = true;
            axios.get(window.api_url+'/api/admin/users?query='+this.search_query+'&current_page='+this.currentPage+'&per_page='+this.perPage).then(response => {
                // console.log(response.data);
                this.usersCount = response.data.count.count;
                this.lastPage = Math.ceil(this.usersCount / this.perPage);
                this.users = response.data.users;
                this.loading = false;
            }).catch(error => {
                console.log(error);
            });
        },


        paginateUsers(page) {
            if(page == this.lastPage + 1) {
                return;
            }

            if(page == 0) {
                return;
            }
            this.currentPage = page;
            this.fetchUsers();
        },

        removeUser(payload) {
            this.users.splice(payload, 1);
        }
    },

    watch: {
        search_query() {
            this.currentPage = 1;
            this.fetchUsers();
        }
    }
}
</script>

<style>
/* Pagination links */
.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
}

/* Style the active/current link */
.pagination a.active {
    background-color: dodgerblue;
    color: white;
}

/* Add a grey background color on mouse-over */
.pagination a:hover:not(.active) {background-color: #ddd;}
</style>
