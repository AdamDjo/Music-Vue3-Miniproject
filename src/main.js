import './assets/base.css'
import './assets/main.css'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Veevalidate from './plugins/vee-validate/validation'
import { auth } from './plugins/firebase/firebase'
import i18n from './plugins/i18n/i18n'
import { registerSW } from 'virtual:pwa-register'
import GlobalComponents from './plugins/global/_globals'
import ProgressBar from './plugins/progressBar/progress'

registerSW({ immediate: true })
ProgressBar(router)
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(Veevalidate)
    app.use(i18n)
    app.use(GlobalComponents)
    app.mount('#app')
  }
})
