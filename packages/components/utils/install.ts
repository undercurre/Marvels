import type { App, Component, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
	(comp as SFCWithInstall<T>).install = (app: App) => {
		const name = (comp as Component).name || 'MyComponent';
		console.log('注册', name);
		//注册组件
		app.component(name, comp as SFCWithInstall<T>);
	};
	return comp as SFCWithInstall<T>;
};

export default withInstall;

// 1.编写组件
// 2.构建插件：install属性实现注册入口，app.component()实现注册回调
// 3.注册插件：使用 app.use() 注册插件
