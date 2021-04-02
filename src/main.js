import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Popup, NavBar } from 'vant'
import 'vant/lib/index.css'

createApp(App).use(router).use(NavBar).use(Popup).mount('#app')
