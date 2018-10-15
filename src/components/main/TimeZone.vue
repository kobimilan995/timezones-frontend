<template>
    <div class="card-body">
        <h4><router-link :to="{ name: timeZoneRoute, params: {timezone_id:timeZone.tz_id} }">{{timeZone.tz_name}}</router-link></h4>
        <h6 class="card-subtitle mb-2 text-muted">{{timeZone.tz_city}}</h6>
        <p>GMT: {{this.timeZone.tz_gmt_diff >= 0 ? '+' + this.timeZone.tz_gmt_diff : this.timeZone.tz_gmt_diff}}</p>
        <br>
        <p>{{gmdate}}</p>
        <!-- <p>{{gmdate}}</p> -->
        <!-- <router-link class="btn btn-primary btn-sm mr-2" :to="{ name: 'edit_user', params: { user_id: user.id }}">Edit</router-link>
        <a class="btn btn-danger btn-sm" style="color: white;" @click="deleteUser">Ban <i class="fas fa-times"></i></a> -->
    </div>
</template>

<script>
export default {
    props: {
        timeZone: {
            required: true
        },

        loop_index: {
            required: true
        }
    },

    computed: {
        gmdate() {
            let { gmt } = this.$store.state.gmt;
            return moment(gmt).add(this.timeZone.tz_gmt_diff, "hours").format('MMMM Do YYYY, h:mm:ss a');
        },

        timeZoneRoute() {
            if(this.$route.name === 'show_timezones') {
                return 'timezone_show';
            }
        }
    },

}
</script>

<style lang="css">
</style>
