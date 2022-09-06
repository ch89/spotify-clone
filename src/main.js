import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/app.css'
import { initializeApp } from "firebase/app"

initializeApp({
	apiKey: "AIzaSyBRVyrmFU0tRjVcIYxOolQgefXQc2_UTTU",
	authDomain: "spotify-clone-e23a9.firebaseapp.com",
	projectId: "spotify-clone-e23a9",
	storageBucket: "spotify-clone-e23a9.appspot.com",
	messagingSenderId: "655442188989",
	appId: "1:655442188989:web:967bcc0cbd532e0fc575d4",
	measurementId: "G-9VFZCD0YSJ"
})

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
