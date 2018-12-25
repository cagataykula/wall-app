export default {
    fetchPosts(cb) {
        return firebase.database().ref('/posts').once('value');
    },

    fetchPostDetail(postId) {
        return firebase.database().ref('/posts/' + postId).once('value');
    },

    changeLike(post){
        return firebase.database().ref('/posts/' + post.index + '/isLiked').set(!post.isLiked);
    }

}