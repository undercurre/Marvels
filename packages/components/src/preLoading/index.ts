import type { App } from 'vue';
import MPreLoading from './index.vue';

export { MPreLoading };

export default {
	install(app: App) {
		app.component('MPreLoading', MPreLoading);
	}
};
