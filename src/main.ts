import './assets/scss/main.scss'
import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import AppInput from './components/UI/Controls/Input.vue'

const app = createApp(App)


app.use(store)

app.component('AppInput', AppInput);

app.mount('#app')