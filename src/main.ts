import './assets/tailwind.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { makeServer } from "./server"
import router from './router'
import './index.css'


const app = createApp(App)
const globalPermission = document.getElementById('userPermission') as HTMLInputElement | null
const userPermission = globalPermission?.value
app.provide('userPermission', userPermission)

app.use(createPinia())
app.use(router)
app.config.globalProperties.window = window


if (import.meta.env.DEV) {
    makeServer()
}

app.mount('#app')
