<template>
    <div v-if="loading" style="align-content: center;">
        <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>
    </div>
    <div v-else>
        <hr>
        <div class=" col-md-6 offset-md-3">
            <router-link class="btn btn-primary float-right" :to="{ name: 'admin_users'}">All users</router-link>
            <div class="form-group">
                <label for="first_name">First Name:</label>
                <h5 v-if="!editing">{{user.first_name}}</h5>
                <input ref="first_name" v-else type="first_name" class="form-control" id="first_name" :value="user.first_name" aria-describedby="first_name" placeholder="First name" required>
            </div>
            <hr>
            <div class="form-group">
                <label for="last_name">Last name:</label>
                <h5 v-if="!editing">{{user.last_name}}</h5>
                <input ref="last_name" v-else type="last_name" class="form-control" id="last_name" :value="user.last_name" aria-describedby="last_name" placeholder="Last name" required>
            </div>
            <hr>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address:</label>

                <h5 v-if="!editing">{{user.email}}</h5>
                <input ref="email" v-else type="email" class="form-control" id="exampleInputEmail1" :value="user.email" aria-describedby="emailHelp" placeholder="Enter email" required>
            </div>
            <hr>
            <div class="form-group">
                <label for="sel1">Users role:</label>
                <h5 v-if="!editing">{{user.role_name}}</h5>
                <select v-else ref="new_user_role" class="form-control" id="sel1">
                    <option v-for="(role, index) in roles" :value="role.role_id" :selected="user.role_id == role.role_id ? true : false">{{role.role_name}}</option>
                </select>
            </div>
            <button class="btn btn-info" v-if="!editing" @click="editing = true">Edit</button>
            <button class="btn btn-danger float-right" v-if="!editing" :disabled="disableSubmitting" @click="deleteUser">Delete</button>
            <button type="submit" class="btn btn-primary" :disabled="disableSubmitting" v-if="editing" @click="submitUpdateRequest">Save changes</button>
            <button type="submit" class="btn btn-info float-right" v-if="editing" @click="editing = false">Cancel</button>
        </div>
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
            newUser: {
                id: 0,
                first_name: '',
                last_name: '',
                email: '',
                role_id: ''
            },
            editing: false,
            roles: [],

            loading: true,
            disableSubmitting: false
        }
    },

    methods: {
        submitUpdateRequest() {
            this.disableSubmitting = true;
            let select = this.$refs['new_user_role'];
            this.newUser.role_id = select.options[select.selectedIndex].value;
            this.newUser.first_name = this.$refs['first_name'].value;
            this.newUser.last_name = this.$refs['last_name'].value;
            this.newUser.email = this.$refs['email'].value;
            this.newUser.id = this.user.id;
            this.user = this.newUser;
            axios.put(window.api_url+'/api/admin/users/'+this.user.id, this.newUser).then(response => {
                // console.log(response.data);
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
        },

        deleteUser() {
            this.$dialog
            .confirm('You are about to ban ' + this.user.first_name + ' ' + this.user.last_name+'. Are you sure?')
            .then((dialog) => {

                this.disableSubmitting = true;
                axios.delete(window.api_url+'/api/admin/users/'+this.user.id).then(response => {
                    this.$notify({
                        group: 'notify',
                        title: 'Success',
                        text: response.data.message,
                        type: 'success'
                    });
                    this.$router.push({name: 'admin_users'});
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
            });

        }
    },

    created() {
        axios.get(window.api_url+'/api/admin/users/'+this.$route.params.user_id).then(response => {
            // console.log(response.data);
            this.user = response.data.user;
            this.roles = response.data.roles;
            this.loading = false;
        }).catch(error => {
            // console.log(error);
        });
    }
}
</script>
