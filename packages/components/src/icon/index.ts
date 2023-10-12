import type { App } from 'vue';
import MIcon from './index.vue';

export { MIcon };

export default {
	install(app: App) {
		app.component('MIcon', MIcon);
	}
};
