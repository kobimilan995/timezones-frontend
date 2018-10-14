<template>
    <div class="card-body">
        <h5 class="card-title">{{user.first_name}} {{user.last_name}} ({{user.id}})</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{user.email}} - ({{user.role_name}})</h6>
        <br>
        <router-link class="btn btn-primary btn-sm mr-2" :to="{ name: 'edit_user', params: { user_id: user.id }}">Edit</router-link>
        <a class="btn btn-danger btn-sm" style="color: white;" @click="deleteUser">Ban <i class="fas fa-times"></i></a>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            required: true
        },
        loop_index: {
            required: true
        }
    },

    methods: {
        deleteUser() {
            this.$dialog
            .confirm('You are about to ban ' + this.user.first_name + ' ' + this.user.last_name+'. Are you sure?')
            .then((dialog) => {
                axios.delete(window.api_url+'/api/admin/users/'+this.user.id).then(response => {
                    this.$notify({
                        group: 'notify',
                        title: 'Success',
                        text: response.data.message,
                        type: 'success'
                    });
                    this.$emit('userDeleted', this.loop_index);
                }).catch(error => {
                    let {data} = error.response.data;
                    this.$notify({
                        group: 'notify',
                        title: 'Error',
                        text: data[Object.keys(data)[0]][0],
                        type: 'error'
                    });
                });
            });

        }
    }
}
</script>
