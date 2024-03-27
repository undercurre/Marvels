import { createApp } from 'vue';
import App from './app.vue';
import 'marvels-plus/lib/components/style.css';

import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
