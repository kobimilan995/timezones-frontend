<template>
    <div class="">
        <h4 class="col-md-4 offset-md-3">Create new time zone</h4>
        <form class=" col-md-6 offset-md-3" @submit.prevent="createTimeZone">
            <div class="form-group">
                <label for="tz_name">Time Zone Name</label>
                <input type="text" class="form-control" id="tz_name" v-model="timezone.name" aria-describedby="tz_name" placeholder="Time zone name" required>
            </div>
            <div class="form-group">
                <label for="tz_city">Time Zone City</label>
                <input type="text" class="form-control" id="tz_city" v-model="timezone.city" aria-describedby="tz_city" placeholder="Time zone city" required>
            </div>
            <div class="form-group">
                <label for="tz_gmt_diff">GMT Differance</label>
                <input type="number" class="form-control" id="tz_gmt_diff" v-model="gmt_diff" aria-describedby="tz_gmt_diff" placeholder="Time zone GMT differance" required>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">Submit <i class="fa fa-spinner fa-spin" v-show="loading"></i></button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timezone: {
                name: '',
                city: '',
                gmt_differance: 0
            },

            gmt_diff: 0,
            loading: false
        }
    },
    methods: {
        createTimeZone() {
            this.loading = true;
            this.timezone.gmt_differance = this.gmt_diff;
            axios.post(window.api_url + '/api/time_zones', this.timezone).then(response => {
                // console.log(response.data);
                let { completed } = response.data;
                if(completed) {
                    this.$notify({
                        group: 'notify',
                        title: 'Success',
                        text: 'Time zone succesfully added!',
                        type: 'success'
                    });
                    this.$router.push({name: 'show_timezones'});
                }
                this.loading = false;
            }).catch(error => {
                // console.log(error);
                let {data} = error.response.data;
                this.$notify({
                    group: 'notify',
                    title: 'Error',
                    text: data[Object.keys(data)[0]][0],
                    type: 'error'
                });
                this.loading = false;
            });
        }
    },

    watch: {
        gmt_diff(val) {
            if(parseInt(val) > 12) {
                this.gmt_diff = 12;
                return;
            }

            if(parseInt(val) < -12) {
                this.gmt_diff = -12;
                return;
            }
        }
    }
}
</script>

<style lang="css">
</style>
