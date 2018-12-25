import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';


export default {
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/post/:id',
            component: Post,
        }

    ],
    mode: 'history'
}