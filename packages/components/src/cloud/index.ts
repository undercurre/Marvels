import type { App } from 'vue';
import MCloud from './index.vue';

export { MCloud };

export default {
	install(app: App) {
		app.component('MCloud', MCloud);
	}
};
