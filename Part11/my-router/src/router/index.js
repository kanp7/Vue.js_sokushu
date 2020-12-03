import { createRouter, createWebHistory } from 'vue-router'
// c.コンポーネントをインポート
import Home from '../views/Home.vue'


// b. ルーティング情報を準備
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // d. Aboutコンポーネントを非同期インポート
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

// a.ルーターを生成
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// ルーターをエクスポート
export default router
