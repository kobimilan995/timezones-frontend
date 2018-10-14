<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': route=='admin_dashboard'}" :to="{ name: 'admin_dashboard'}">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': route=='admin_users' || route == 'edit_user'}" :to="{ name: 'admin_users'}">Users</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': route=='admin_time_zones'}" :to="{ name: 'admin_time_zones'}">Time Zones</router-link>
            </li>
        </ul>
        <br>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    created() {


    },

    computed: {
        route() {
            return this.$route.name;
        }
    }
}
</script>

<style>
.content-container {
    background-color: #f4f6f7;
    padding:15px;
    border-radius: 20px;
}
</style>
