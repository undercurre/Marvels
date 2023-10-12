import type { App } from 'vue';
import MSwitch from './index.vue';

export { MSwitch };

export default {
	install(app: App) {
		app.component('MSwitch', MSwitch);
	}
};
