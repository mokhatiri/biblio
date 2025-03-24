import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.config.globalProperties.$JsonURL = 'http://localhost:3000/livres';

app.use(router).mount('#app')