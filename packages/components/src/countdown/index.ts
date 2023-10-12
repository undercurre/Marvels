import type { App } from 'vue';
import MCountdown from './index.vue';

export { MCountdown };

export default {
	install(app: App) {
		app.component('MCountdown', MCountdown);
	}
};
