import MButton from './index.vue';
import type { App } from 'vue';

export { MButton };

export default {
	install(app: App) {
		app.component('MButton', MButton);
	}
};
