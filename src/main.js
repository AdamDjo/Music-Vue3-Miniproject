import './assets/base.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import router from './router'
import Veevalidate from './plugins/vee-validate/validation'

const app = createApp(App)

app.use(createPinia())
app.use(Veevalidate)
//app.use(router)

app.mount('#app')