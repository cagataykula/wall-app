<template>
    <section>
    <Header text="Gönderiler" />
    <div class="container">
        <Loader v-if="isLoading" />
        <Posts v-for="(post, index) in posts" :post="post" :index="index" :key="post.id" />
    </div>
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

