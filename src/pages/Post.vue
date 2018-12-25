<template>
    <section>
        <Header text="Gönderi" />
        <div class="container">
            <Loader v-if="isLoading" />
            <Posts :post="postDetail" :index="indexNumber" v-if="!isLoading" :fromSinglePage="true" />
            <Comments :post-id="postId" />
            <p @click="goBack">Geri Dön</p>
        </div>
    </section>
</template>

<script>
import Header from '../components/Header.vue';
import Posts from '../components/Posts.vue';
import Loader from '../components/Loader.vue';
import Comments from '../components/Comments.vue';

export default {
    data(){
        return{
            isLoading: true,
        }
    },
    computed: {
        postDetail() {
            return this.$store.state.postDetail;
        },
        postId() {
            return parseInt(this.$store.state.postDetail.id);            
        },
        indexNumber(){
            return this.$route.params.id;
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    created() {
        this.$store.dispatch('fetchPostDetail', this.$route.params.id).then(()=>{
            this.isLoading = false;
        });
    },

    components: { Header, Loader, Posts, Comments},
}
</script>
