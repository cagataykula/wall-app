<template>
    <div class="card" style="width: 70%; left: 10%">
    <ul class="list-group list-group-flush">
    <div class="h3 p-3">Yorumlar</div>
        <li class="list-group-item" v-for="comment in comments" :key="comment.id">
            <strong>{{comment.name}}: </strong><br>
            {{comment.body}}
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comments: {}
        }
    },
    props: {
        postId: {
            type: Number,
            required: true
        }
    },
    created() {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + this.postId)
            .then( (res) => { return res.json(); } )
            .then( (res) => { this.comments = res })
    },
}
</script>
