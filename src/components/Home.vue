<template>
    <div>
        <ul class="nav nav-tabs mb-4">
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': route=='show_timezones' || route=='timezone_show'}" :to="{ name: 'show_timezones'}">Time Zones</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': route=='timezone_create'}" :to="{ name: 'timezone_create'}">Create new Time Zone</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        gmdate() {
            return this.$store.state.gmt.gmtHuman ? this.$store.state.gmt.gmtHuman:'';
        },
        route() {
            return this.$route.name;
        }

    }
}
</script>
