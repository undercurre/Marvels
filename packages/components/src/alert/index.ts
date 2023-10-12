import type { App } from 'vue';
import MAlert from './index.vue';

export { MAlert };

export default {
	install(app: App) {
		app.component('MAlert', MAlert);
	}
};
