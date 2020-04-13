import VueRouter from 'vue-router'
import Home from './pages/Home'
import Debet from './pages/debet'
import Credit from './pages/credit'
import Calculator from './pages/calc'
import Settings from './pages/Settings'


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/debet',
            component: Debet,
        },
        {
            path: '/credit',
            component: Credit,
        },
        {
            path: '/calc',
            component: Calculator,
        },
        {
            path: '/settings',
            component: Settings,
        }
    ],
})

