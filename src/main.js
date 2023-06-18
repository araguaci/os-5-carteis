import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/os_5_carteis_que_governam_a_america_e_o_mundo', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')