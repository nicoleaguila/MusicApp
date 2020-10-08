import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Playlist from '../views/Playlist.vue'
import Explorar from '../views/Explorar'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: Playlist
  },
  {
    path: '/explorar',
    name: 'Explorar',
    component: Explorar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
