<template>
    <div id="app">
        <Header />
        <div class="container">
            <router-view />
        </div>

    </div>
</template>

<script>
    import Header from './components/Header'

    export default {
        components: {
            Header,
        },
        methods: {
            getData() {
                console.log('...загрузка')
                this.$resource('categories').get()
                    .then(response => response.json())
                    .then(category => {
                        console.log(category)
                        this.$store.commit('getCategory', category);
                        console.log('...загружено')
                    })
            }
        },
        created() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>