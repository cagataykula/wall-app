export default {
    fetchPosts(cb) {
        return firebase.database().ref('/posts').once('value');
    },

    changeLike(post){
        return firebase.database().ref('/posts/' + post.index + '/isLiked').set(!post.isLiked);
    }

}