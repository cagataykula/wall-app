<template>
    <section>
        <i class="far fa-heart" @click="changeLike(post)" v-if="post.isLiked == false"></i>
        <i class="fas fa-heart" @click="changeLike(post)" v-if="post.isLiked == true"></i>
    </section>
</template>

<script>
export default {
    name: 'LikeButton',
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
    methods: {
        changeLike (post) {
            post['index'] = this.index
            this.$store.dispatch('changeLike', post).then(() => {         
            })
        }
    }
}
</script>

<style>
.fa-heart{
    color: red;
}
</style>
