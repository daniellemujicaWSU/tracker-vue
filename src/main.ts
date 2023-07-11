import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { makeServer } from "./server"
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

if (import.meta.env.DEV) {
    makeServer()
}

app.mount('#app')
