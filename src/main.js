import { createApp } from 'vue'
import App from './App'
import router from '@/router/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap'
import './assets/styles.scss'
import store from './store'


createApp(App).use(router).use(store).mount('#app')
