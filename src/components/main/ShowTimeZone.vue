<template>
    <div v-if="loading" style="align-content: center;">
        <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>
    </div>
    <div v-else class="row">
        <div class="col-md-6 offset-md-3">
            <div class="card" style="width: auto;">
                <div class="card-body">
                    <span v-if="editing">Time zone name:</span><input ref="tz_name" type="text" class="form-control" :value="timeZone.tz_name" v-if="editing">
                    <h5 class="card-title" v-else>{{timeZone.tz_name}}</h5>
                    <p class="card-text" v-if="!editing"><small>{{gmdate}}</small></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <span v-if="editing">Time zone city:</span>
                        <input ref="tz_city" type="text" class="form-control" :value="timeZone.tz_city" v-if="editing">
                        <span v-else>City: {{timeZone.tz_city}}</span>
                    </li>
                    <li class="list-group-item">
                        <span v-if="editing">Time zone GMT differance:</span>
                        <input ref="tz_gmt_diff" type="number" class="form-control" :value="timeZone.tz_gmt_diff" v-if="editing">
                        <span v-else>GMT: {{this.timeZone.tz_gmt_diff >= 0 ? '+' + this.timeZone.tz_gmt_diff : this.timeZone.tz_gmt_diff}}</span>
                    </li>
                </ul>
                <div class="card-body" v-if="!editing">
                    <a href="#" class="btn btn-info mr-2 btn-sm" @click.prevent="editing = true">Edit <i class="fas fa-edit"></i></a>
                    <button href="#" class="btn btn-danger btn-sm" @click.prevent="deleteTimeZone" :disabled="submitLoading">Delete <i v-if="!submitLoading" class="fas fa-times"></i><i class="fa fa-spinner fa-spin" v-else></i></button>
                </div>

                <div class="card-body" v-else>
                    <button href="#" class="btn btn-primary btn-sm" @click.prevent="saveChanges" :disabled="submitLoading">Save changes <i class="fa fa-spinner fa-spin" v-show="submitLoading"></i></button>
                    <a href="#" class="btn btn-info btn-sm float-right" @click.prevent="editing = false;">Cancel</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeZone: {},
            newTimeZone: {
                name: '',
                city: '',
                gmt_differance: 0
            },
            loading: true,
            submitLoading: false,
            editing: false
        }
    },
    created() {
        axios.get(window.api_url+'/api/time_zones/'+this.$route.params.timezone_id).then(response => {
            // console.log(response.data);
            this.timeZone = response.data.time_zone;
            this.loading = false;
        }).catch(error => {
            // console.log(error);
            if(error.response.status == 403 || error.response.data == 400) {
                this.$notify({
                    group: 'notify',
                    title: 'Error',
                    text: 'Forbidden!',
                    type: 'error'
                });
                this.$router.push({name: 'show_timezones'});
            }
        });
    },

    methods: {
        saveChanges() {
            this.submitLoading = true;
            this.newTimeZone.city = this.$refs['tz_city'].value;
            this.newTimeZone.name = this.$refs['tz_name'].value;
            this.newTimeZone.gmt_differance = this.$refs['tz_gmt_diff'].value;
            axios.put(window.api_url+'/api/time_zones/'+this.$route.params.timezone_id, this.newTimeZone).then(response => {
                // console.log(response.data);
                let { completed } = response.data;

                if(completed) {
                    this.$notify({
                        group: 'notify',
                        title: 'Success',
                        text: 'You have succesfully updated your timezone!',
                        type: 'success'
                    });

                    this.timeZone.tz_name = this.newTimeZone.name;
                    this.timeZone.tz_city = this.newTimeZone.city;
                    this.timeZone.tz_gmt_diff = this.newTimeZone.gmt_differance;

                    this.submitLoading = false;
                    this.editing = false;
                }

                else {
                    this.$notify({
                        group: 'notify',
                        title: 'Error',
                        text: 'You need to change some field in order to edit time zone.',
                        type: 'error'
                    });
                    this.submitLoading = false;
                }
            }).catch(error => {
                // console.log(error);
                if(error.response.status == 403) {
                    this.$notify({
                        group: 'notify',
                        title: 'Error',
                        text: 'Forbidden!',
                        type: 'error'
                    });
                    this.$router.push({name: 'show_timezones'});
                }
                if(error.response.status == 400) {
                    let {data} = error.response.data;
                    this.$notify({
                        group: 'notify',
                        title: 'Error',
                        text: data[Object.keys(data)[0]][0],
                        type: 'error'
                    });
                    this.submitLoading = false;
                }
            });
        },

        deleteTimeZone() {
            this.$dialog
            .confirm('You are about to delete ' + this.timeZone.tz_city + ' time zone. Are you sure?')
            .then((dialog) => {

                this.submitLoading = true;
                axios.delete(window.api_url+'/api/time_zones/'+this.$route.params.timezone_id).then(response => {
                    // console.log(response.data);
                    this.$notify({
                        group: 'notify',
                        title: 'Success',
                        text: response.data.message,
                        type: 'success'
                    });
                    this.submitLoading = false;
                    this.$router.push({name: 'show_timezones'});
                }).catch(error => {
                    let {data} = error.response.data;
                    this.$notify({
                        group: 'notify',
                        title: 'Error',
                        text: data[Object.keys(data)[0]][0],
                        type: 'error'
                    });
                    this.submitLoading = false;
                });
            });

        }
    },

    computed: {
        gmdate() {
            let { gmt } = this.$store.state.gmt;
            return moment(gmt).add(this.timeZone.tz_gmt_diff, "hours").format('MMMM Do YYYY, h:mm:ss a');
        }
    }
}
</script>

<style lang="css">
</style>
