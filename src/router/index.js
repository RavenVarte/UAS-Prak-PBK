import { createRouter, createWebHashHistory } from 'vue-router'
import WeatherWidget from '../components/WeatherWidget.vue'
import Portfolio from '../components/Portfolio.vue'
import Tugas2 from '../components/Tugas2.vue'
import Tugas3 from '../components/Tugas3.vue'
import Tugas4 from '../components/Tugas4.vue'
import Tugas5 from '../components/Tugas5.vue'
import Tugas6 from '../components/Tugas6.vue'

const routes = [
  { path: '/', redirect: '/widget' },
  { path: '/widget', component: WeatherWidget },
  { path: '/portfolio', component: Portfolio },
  { path: '/tugas2', component: Tugas2 },
  { path: '/tugas3', component: Tugas3 },
  { path: '/tugas4', component: Tugas4 },
  { path: '/tugas5', component: Tugas5 },
  { path: '/tugas6', component: Tugas6 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
