<template>
    <section>
    <Header text="Gönderiler" />
    <div class="row">
        <div class="col-sm-9"></div>
        <div class="col-sm-3">
            <select v-model="animation">
                <option value="slide-fade">Slide Fade</option>
                <option value="fade">Fade</option>
                <option value="blur">Blur</option>
                <option value="bounce">Bounce</option>
            </select>
            <br>
            <button @click="show = !show">{{ (show) ? "Gizle" : "Göster"  }}</button>
        </div>
    </div>
    <div class="container">
        <Loader v-if="isLoading" />
        <Posts v-for="(post, index) in posts" :post="post" :index="index" :key="post.id" :show="show" :animation="animation" />
    </div>
    </section>
</template>

<script>
import Header from '../components/Header.vue';
import Posts from '../components/Posts.vue';
import Loader from '../components/Loader.vue';

export default {
    name: 'Home',
    data(){
        return {
            isLoading: true,
            show: true,
            animation: "blur"
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.blur-enter-active, .blur-leave-active {
  transition: .5s;
  filter: blur(0px);
}
.blur-enter, .blur-leave-to /* .fade-leave-active below version 2.1.8 */ {
  filter: blur(50px);
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
