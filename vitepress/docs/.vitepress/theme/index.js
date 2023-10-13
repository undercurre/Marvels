import DefaultTheme from 'vitepress/theme';
import MarvelsUI from 'marvels';
import 'marvels/lib/components/style.css';
export default {
	extends: DefaultTheme,
	enhanceApp: async ({ app }) => {
		// app is the Vue 3 app instance from `createApp()`. router is VitePress'
		// custom router. `siteData`` is a `ref`` of current site-level metadata.
		app.use(MarvelsUI);
	}
};
