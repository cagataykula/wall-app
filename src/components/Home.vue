<template>
    <section>
    <Header text="Gönderiler" />
    <Loader v-if="isLoading" />
    <Posts v-for="post in posts" :post="post" :key="post.id" />
    </section>
</template>

<script>
import Header from './Header.vue';
import Posts from './Posts.vue';
import Loader from './Loader.vue';

export default {
    name: 'Home',
    data(){
        return {
            isLoading: true
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },
    created() {
        this.$store.dispatch('fetchPosts').then(()=>{
            this.isLoading = false;
        });
    },

    components: { Header, Posts, Loader },
    
}
</script>

