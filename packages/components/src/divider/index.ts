import type { App } from 'vue';
import MDivider from './index.vue';

export { MDivider };

export default {
	install(app: App) {
		app.component('MDivider', MDivider);
	}
};
