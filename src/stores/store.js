import service from '../services/service'

const state = {
    posts: []
};

const getters = {};

const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    }
};

const actions = {
    fetchPosts(context) {
        return service.fetchPosts().then((snapshot) => {
            context.commit('setPosts', snapshot.val());
        });
    }
};


export default {
    state,
    getters,
    mutations,
    actions
}