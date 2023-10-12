import type { App } from 'vue';
import MTab from './index.vue';

export { MTab };

export default {
	install(app: App) {
		app.component('MTab', MTab);
	}
};
