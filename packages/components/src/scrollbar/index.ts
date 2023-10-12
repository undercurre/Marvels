import type { App } from 'vue';
import MScrollbar from './index.vue';

export { MScrollbar };

export default {
	install(app: App) {
		app.component('MScrollbar', MScrollbar);
	}
};
