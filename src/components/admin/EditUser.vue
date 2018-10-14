<template>
    <div v-if="loading" style="align-content: center;">
        <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>
    </div>
    <div v-else>
        <h4 class="col-md-4 offset-md-3">Edit user</h4>
        <form class=" col-md-6 offset-md-3" @submit.prevent="submitRegisterRequest">
            <div class="form-group">
                <label for="first_name">First Name</label>
                <input type="first_name" class="form-control" id="first_name" v-model="user.first_name" aria-describedby="first_name" placeholder="First name" required>
            </div>
            <div class="form-group">
                <label for="last_name">Last Name</label>
                <input type="last_name" class="form-control" id="last_name" v-model="user.last_name" aria-describedby="last_name" placeholder="Last name" required>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="user.email" aria-describedby="emailHelp" placeholder="Enter email" required>
            </div>
            <div class="form-group">
                <label for="sel1">Select list:</label>
                <select ref="new_user_role" class="form-control" id="sel1">
                    <option v-for="(role, index) in roles" :value="role.role_id" :selected="user.role_id == role.role_id ? true : false">{{role.role_name}}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="disableSubmitting">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                id: 0,
                first_name: '',
                last_name: '',
                email: '',
                role_id: ''

            },

            roles: [],

            loading: true,
            disableSubmitting: false
        }
    },

    methods: {
        submitRegisterRequest() {
            this.disableSubmitting = true;
            let select = this.$refs['new_user_role'];
            this.user.role_id = select.options[select.selectedIndex].value;
            axios.put(window.api_url+'/api/admin/users/'+this.user.id, this.user).then(response => {
                console.log(response.data);
                if(response.data.updated) {
                    this.$notify({
                        group: 'notify',
                        title: 'Success',
                        text: 'User sucessfully updated!',
                        type: 'success'
                    });
                    this.$router.push({name: 'admin_users'});
                } else {
                    this.$notify({
                        group: 'notify',
                        title: 'Error',
                        text: 'You have to change some field!',
                        type: 'error'
                    });
                }
                this.disableSubmitting = false;
            }).catch(error => {
                let {data} = error.response.data;
                this.$notify({
                    group: 'notify',
                    title: 'Error',
                    text: data[Object.keys(data)[0]][0],
                    type: 'error'
                });

                this.disableSubmitting = false;
            });
        }
    },

    created() {
        axios.get(window.api_url+'/api/admin/users/'+this.$route.params.user_id).then(response => {
            console.log(response.data);
            this.user = response.data.user;
            this.roles = response.data.roles;
            this.loading = false;
        }).catch(error => {
            console.log(error);
        });
    }
}
</script>
