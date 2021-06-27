import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载
const Home = () =>
    import ('views/home/Home.vue')
const Category = () =>
    import ('views/category/Category.vue')
const Shopcart = () =>
    import ('views/shopcart/Shopcart.vue')
const Profile = () =>
    import ('views/profile/Profile.vue')
const Details = () =>
    import ('views/details/Details.vue')
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/shopcart', component: Shopcart },
    { path: '/profile', component: Profile },
    { path: '/detalis/:iid', component: Details }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router