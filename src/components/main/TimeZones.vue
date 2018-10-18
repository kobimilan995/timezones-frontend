<template>
    <div>
        <input v-model="search_query" type="text" class="form-control col-md-4 offset-md-4" placeholder="Filter time zones">
        <br>
        <h5 class="col-md-6 offset-md-3" style="text-align:center;">GMT date: {{gmdate}}</h5>
        <div v-if="!loading && timeZones.length == 0">
            You don't have any time zones added yet. Go add a new one!
        </div>
        <div v-if="!loading">
            <br>
            <div class="row">
                <div class="card col-md-3" v-for="(tz, index) in timeZones">
                    <!-- <user-component @userDeleted="removeUser" :user="user" :key="index" :loop_index="index"></user-component> -->
                    <TimeZone :timeZone="tz"  :loop_index="index" :author="tz.first_name ? tz.first_name + ' ' + tz.last_name : ''"></TimeZone>
                </div>
            </div>
        </div>
        <div v-else style="align-content: center;">
            <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>
        </div>

        <pagination class="mt-4" v-model="currentPage" :records="timeZonesCount" :per-page="perPage" @paginate="paginateTimeZones"></pagination>
    </div>
</template>

<script>
import TimeZone from './TimeZone.vue';
import Pagination from 'vue-pagination-2';
export default {
    components: {
        TimeZone,
        Pagination
    },
    data() {
        return {
            timeZones: [],
            search_query: '',
            loading: false,
            currentPage: 1,
            timeZonesCount: 0,
            lastPage: 0,
            perPage: 12
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
            // console.log(axios.defaults.headers.common['Authorization']);
            this.loading = true;
            axios.get(window.api_url + '/api/time_zones?search_query='+this.search_query+'&current_page='+this.currentPage+'&per_page='+this.perPage).then(response => {
                // console.log(response.data);
                this.timeZonesCount = response.data.count.count;
                this.lastPage = Math.ceil(this.timeZonesCount / this.perPage);
                this.timeZones = response.data.time_zones;
                this.loading = false;
            }).catch(error => {
                // console.log(error);
                this.loading = false;
            });
        },

        paginateTimeZones(page) {
            if(page == this.lastPage + 1) {
                return;
            }

            if(page == 0) {
                return;
            }
            this.currentPage = page;
            this.fetchTimeZones();
        }
    },

    watch: {
        search_query() {
            this.currentPage = 1;
            this.fetchTimeZones();
        }
    }


}
</script>

<style>
.VuePagination__pagination-item-prev-chunk.disabled {
    display: none;
}

.VuePagination__pagination-item-next-chunk.disabled {
    display: none;
}

</style>
