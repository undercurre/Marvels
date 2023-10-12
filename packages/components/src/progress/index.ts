import type { App } from 'vue';
import MProgress from './index.vue';

export { MProgress };

export default {
	install(app: App) {
		app.component('MProgress', MProgress);
	}
};
