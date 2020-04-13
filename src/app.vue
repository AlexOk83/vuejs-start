<template>
    <div id="app">
        <div class="container pt-5 text-center">
            <h1>{{title}}</h1>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {


        data () {
            return {
                counter: 0
            }
        },
        components: {

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