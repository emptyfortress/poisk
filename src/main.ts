import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import quasarIconSet from 'quasar/icon-set/mdi-v6'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import 'quasar/src/css/index.sass'
import '@/assets/styles/main.scss'
import { router } from '@/router/router'
import { createPinia } from 'pinia'
import App from '@/App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(Quasar, {
	plugins: {
		Notify,
	},
	// config: {
	// 	notify: {
	//
	// 	}
	// },
	iconSet: quasarIconSet,

})

app.use(router)
app.use(pinia)
app.mount('#app')
