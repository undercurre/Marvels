import type { App } from 'vue';
import MCard from './index.vue';

export { MCard };

export default {
	install(app: App) {
		app.component('MCard', MCard);
	}
};
