import type { App } from 'vue';
import MFloat from './index.vue';

export { MFloat };

export default {
	install(app: App) {
		app.component('MFloat', MFloat);
	}
};
