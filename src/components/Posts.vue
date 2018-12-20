<template>
    <div class="card">
    <!-- <div class="card-header">Featured</div> -->
    <div class="card-body">
        <h5 class="card-title">{{this.post.title}}</h5>
        <p class="card-text">{{this.post.body}}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
    <div class="card-footer">
        <like-button :post="this.post" :index="index" />
    </div>
    </div>
</template>

<script>
import LikeButton from './LikeButton.vue';

export default {
    name: "Posts",
    data() {
        return {}
    },
    props: {
        post: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    components: { LikeButton }
}
</script>

<style>
.card{
    margin: 15px;
}
</style>

