<template>
    <div class="card">
    <!-- <div class="card-header">Featured</div> -->
    <div class="card-body" @click="routerLink">
        <!-- <router-link :to="routerLink"> -->
            <h5 class="card-title">{{this.post.title}}</h5>
            <p class="card-text">{{this.post.body}}</p>
        <!-- </router-link> -->
    </div>
    <div class="card-footer">
        <like-button :post="this.post" :index="compIndex" :fromSinglePage="fromSinglePage" />
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
            type: String,
            required: true
        },
        fromSinglePage: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        routerLink() {
            this.$router.push({ path: `/post/${this.index}` })
        }
    },
    computed: {
        compIndex(){
            return parseInt(this.index);
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

