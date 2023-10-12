import type { App } from 'vue';
import MLoading from './index.vue';

export { MLoading };

export default {
	install(app: App) {
		app.component('MLoading', MLoading);
	}
};
