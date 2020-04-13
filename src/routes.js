import VueRouter from 'vue-router'
import Home from './pages/Home'
import Debet from './pages/debet'
import Credit from './pages/credit'
import Calculator from './pages/calc'
import Settings from './pages/Settings'


export default new VueRouter({
    routes: [
        {
            name: 'Главная',
            path: '/',
            component: Home,
            hidden: true,
        },
        {
            name: 'Доходы',
            path: '/debet',
            component: Debet,
        },
        {
            name: 'Расходы',
            path: '/credit',
            component: Credit,
        },
        {
            name: 'Калькулятор',
            path: '/calc',
            component: Calculator,
        },
        {
            name: 'Настройки',
            path: '/settings',
            component: Settings,
        }
    ],
})

