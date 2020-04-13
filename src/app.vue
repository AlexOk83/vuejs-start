<template>
    <div id="app">
        <div class="container pt-5 text-center">
            <h1>{{title}}</h1>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter'
    import SecondCounter from './components/SecondCounter'
    import Actions from './components/Actions'

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