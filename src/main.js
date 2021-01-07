import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { firestorePlugin } from 'vuefire'


createApp(App).mount('#app').use(firestorePlugin)

