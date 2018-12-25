import service from '../services/service'

const state = {
    posts: [],
    postDetail: {}
};

const getters = {};

const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    setPostDetail(state, postDetail) {
        state.postDetail = postDetail;
    },

    changeLike(state, post){
        if(post[1] != true)
            state.posts[parseInt(post[0].index)].isLiked = !state.posts[parseInt(post[0].index)].isLiked;
        else
        state.postDetail.isLiked = !state.postDetail.isLiked;
    },

    changeLikePostDetail(state, post){
    }
};

const actions = {
    fetchPosts(context) {
        return service.fetchPosts().then((snapshot) => {
            context.commit('setPosts', snapshot.val());
        });
    },
    
    fetchPostDetail(context, postId) {
        return service.fetchPostDetail(postId[0]).then((snapshot) => {
            let postDetail = snapshot.val();
            postDetail['index'] = postId;
            context.commit('setPostDetail',postDetail);
        });
    },
    
    changeLike(context, post) {
        return service.changeLike(post[0]).then(() => {
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