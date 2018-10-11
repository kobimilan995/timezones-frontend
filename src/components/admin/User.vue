<template>
    <div class="card-body">
        <h5 class="card-title">{{user.first_name}} {{user.last_name}} ({{user.id}})</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{user.email}} - ({{user.role_name}})</h6>
        <br>
        <!-- <a class="btn btn-primary btn-sm mr-2" style="color: white;">Edit</a>
        <a class="btn btn-danger btn-sm" style="color: white;">Delete</a> -->
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
    }
}
</script>
