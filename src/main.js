import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.provide('pokedex', new Pokedex.Pokedex({protocol: 'https'}));

app.mount('#app')
