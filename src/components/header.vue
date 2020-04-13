<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link tag="a" class="navbar-brand" to="/" >Моя бухгалтерия</router-link>
            <button class="navbar-toggler" type="button" @click="collapse">
                <span class="navbar-toggler-icon" />
            </button>
            <div v-bind:class='{show: show}' class="collapse navbar-collapse" >

                <ul class="navbar-nav" v-for="item of routes">
                    <router-link tag="li" class="nav-item" :to="item.path" active-class="active">
                        <a class="nav-link">{{item.title}}</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "header",
        data() {
            return {
                routes: [
                    {
                        title: 'Доходы',
                        path: '/debet'
                    },
                    {
                        title: 'Расходы',
                        path: '/credit'
                    },
                    {
                        title: 'Калькулятор',
                        path: '/calc'
                    },
                    {
                        title: 'Настройки',
                        path: '/settings'
                    },
                ],
                showMenu: false,
                currentPath: this.$route.path
            }
        },
        watch: {
            $route(toR) {
                if (this.currentPath !== toR.path) {
                    this.currentPath = toR.path;
                    this.showMenu = false;
                }

            }
        },
        methods: {
            collapse() {
                this.showMenu = !this.showMenu
            }
        },
        computed: {
            show() {
                return  this.showMenu
            }
        },
    }
</script>

<style scoped>

</style>