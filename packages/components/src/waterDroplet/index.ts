import type { App } from 'vue';
import MWaterDroplet from './index.vue';

export { MWaterDroplet };

export default {
	install(app: App) {
		app.component('MWaterDroplet', MWaterDroplet);
	}
};
