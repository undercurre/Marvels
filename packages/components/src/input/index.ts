import type { App } from 'vue';
import MInput from './index.vue';

export { MInput };

export default {
	install(app: App) {
		app.component('MInput', MInput);
	}
};
