export default {
    fetchPosts(cb) {
        return firebase.database().ref('/posts').once('value');
    },

    changeLike(cb, post){

    }

}