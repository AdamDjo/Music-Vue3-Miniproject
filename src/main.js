import './assets/base.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import router from './router'
import Veevalidate from './plugins/vee-validate/validation'
import { auth } from './plugins/firebase/firebase'

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(Veevalidate)

    //app.use(router)

    app.mount('#app')
  }
})
