import type { App, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
	(comp as SFCWithInstall<T>).install = (app: App) => {
		const name = (comp as any).name;
		console.log('注册', name);
		//注册组件
		app.component(name, comp as SFCWithInstall<T>);
	};
	return comp as SFCWithInstall<T>;
};

export default withInstall;
