import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Curso from '../views/Curso.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/Curso', alias: '/curso', component: Curso }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0 }
    }
})