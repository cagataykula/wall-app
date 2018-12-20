<template>
    <nav class="navbar navbar-light bg-info justify-content-center">
    <span class="navbar-brand mb-0 h1 text-white"> {{this.text}} </span>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {}
    }
}
</script>
