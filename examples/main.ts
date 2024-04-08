import { createApp } from 'vue';
import App from './app.vue';
import 'marvels-plus/es/components/style.css';
import './assets/styles/reset.css';

import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
