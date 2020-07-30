import VueRouter from 'vue-router'
import Home from './pages/Home'
import Debet from './pages/debet'
import Credit from './pages/credit'
import Calculator from './pages/calc'
import Settings from './pages/Settings'
import Games from './pages/games'
import Tetris from './pages/tetris'
import Pjathashki from './pages/pjatnashki'


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
        },
        {
            name: 'Игры',
            path: '/games/:id',
            component: Games,
            children: [
                {
                    name: 'Тетрис',
                    path: '/games/game1',
                    title: 'Тетрис',
                    component: Tetris,
                },
                {
                    name: 'Пятнашки',
                    path: '/games/games2',
                    component: Pjathashki,
                },
            ],
        },
    ],
})

