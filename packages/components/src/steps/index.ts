import type { App } from 'vue';
import MSteps from './index.vue';

export { MSteps };

export default {
	install(app: App) {
		app.component('MSteps', MSteps);
	}
};
