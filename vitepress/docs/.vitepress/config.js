export default {
	base: '/Matrix-UI-Dosc/',
	title: 'Matrix',
	description: 'Just playing around.',
	appearanece: false,
	themeConfig: {
		nav: [
			{ text: '指南', link: '/guild/installation' },
			{
				text: '组件',
				link: '/component/button'
			}
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/undercurre/Matrix-UI' }],
		sidebar: [
			{
				text: '组件',
				items: [
					{
						text: '基础组件',
						items: [
							{ text: '按钮', link: '/component/button' },
							{ text: '图标', link: '/component/icon' },
							{ text: '滚动条', link: '/component/scrollbar' }
						]
					},
					{
						text: '表单组件',
						items: [
							{ text: '单选框', link: '/component/radio' },
							{ text: '多选框', link: '/component/checkbox' },
							{ text: '输入框', link: '/component/input' },
							{ text: '选择器', link: '/component/select' },
							{ text: '开关', link: '/component/switch' },
							{ text: '滑块', link: '/component/slider' }
						]
					},
					{ text: '数据组件', items: [{ text: '分页', link: '/component/pagination' }] },
					{
						text: '导航组件',
						items: [
							{ text: '导航菜单', link: '/component/menu' },
							{ text: '步骤条', link: '/component/steps' }
						]
					},
					{ text: '其他组件', items: [{ text: '分割线', link: '/component/divider' }] }
				]
			}
		]
	}
};
