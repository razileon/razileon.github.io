import Home from "./views/Home.vue";

export const routes = [
    { path: '/', component: Home },
    { path: '/scene11', component: () => import('./views/Scene11.vue'), },
    { path: '/scene12', component: () => import('./views/Scene12.vue'), },
    { path: '/scene13', component: () => import('./views/Scene13.vue'), },
    { path: '/turtle', component: () => import('./views/Turtle.vue'), },
    { path: '/no-turtle', component: () => import('./views/NoTurtle.vue'), },
]