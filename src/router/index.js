import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const files = require.context('./',false,/\.router.js$/);
const routes = [];
files.keys().forEach(key=>{
  routes.push(...files(key).default);
})
console.log('routes',routes);

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
