<template>
    <div>
        <input v-model="search_query" type="text" class="form-control col-md-4 offset-md-4" placeholder="Filter time zones">
        <br>
        <h5 class="col-md-6 offset-md-3" style="text-align:center;">GMT date: {{gmdate}}</h5>
        <div v-if="!loading">
            <br>
            <div class="row">
                <div class="card col-md-3" v-for="(tz, index) in timeZones">
                    <!-- <user-component @userDeleted="removeUser" :user="user" :key="index" :loop_index="index"></user-component> -->
                    <TimeZone :timeZone="tz"  :loop_index="index"></TimeZone>
                </div>
            </div>
        </div>
        <div v-else style="align-content: center;">
            <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>
        </div>
    </div>
</template>

<script>
import TimeZone from './TimeZone.vue';
export default {
    components: {
        TimeZone
    },
    data() {
        return {
            timeZones: [],
            search_query: '',
            loading: false
        }
    },

    created() {
        this.fetchTimeZones();
    },

    computed: {
        gmdate() {
            let { gmt } = this.$store.state.gmt;
            return moment(gmt).format('MMMM Do YYYY, h:mm:ss a');
        }
    },

    methods: {
        fetchTimeZones() {
            this.loading = true;
            axios.get(window.api_url + '/api/time_zones?search_query='+this.search_query).then(response => {
                this.timeZones = response.data.time_zones;
                this.loading = false;
            }).catch(error => {
                console.log(error);
                this.loading = false;
            });
        }
    },

    watch: {
        search_query() {
            this.fetchTimeZones();
        }
    }


}
</script>
