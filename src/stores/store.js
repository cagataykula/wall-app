import service from '../services/service'

const state = {
    posts: []
};

const getters = {};

const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    changeLike(state, post){
        state.posts[parseInt(post.index)].isLiked = !state.posts[parseInt(post.index)].isLiked
    }
};

const actions = {
    fetchPosts(context) {
        return service.fetchPosts().then((snapshot) => {
            context.commit('setPosts', snapshot.val());
        });
    },
    
    changeLike(context, post) {
        return service.changeLike(post).then(() => {
            context.commit('changeLike', post);
        })
    } 
};


export default {
    state,
    getters,
    mutations,
    actions
}