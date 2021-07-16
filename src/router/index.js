import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
const Detail = () =>
    import ('../views/detail/Detail')

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showTab: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            showTab: true
        }
    }, {
        path: '/cart',
        component: Cart,
        meta: {
            showTab: true
        }
    }, {
        path: '/profile',
        component: Profile,
        meta: {
            showTab: true
        }
    }, {
        path: '/detail/:iid',
        component: Detail,
        meta: {
            showTab: false
        }
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    mode: 'history'
})

export default router