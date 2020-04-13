<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header'

    export default {


        data () {
            return {
                counter: 0
            }
        },
        components: {
            Header,
        },
        computed: {
            title() {
                return this.$store.getters.computedTitle
            }
        }
    }
</script>

<style scoped>

</style>