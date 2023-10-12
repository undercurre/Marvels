import * as components from './src/index';
export * from './src/index';
import type { App } from 'vue';

const componentsArray = Object.entries(components);

export default {
	install: (app: App) => {
		for (const c in componentsArray) {
			console.log(componentsArray);
			app.use(componentsArray[c][1]);
		}
	}
};
