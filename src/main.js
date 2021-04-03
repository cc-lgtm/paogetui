import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { NavBar } from 'vant'
import 'vant/lib/index.css'

createApp(App).use(router).use(NavBar).mount('#app')
