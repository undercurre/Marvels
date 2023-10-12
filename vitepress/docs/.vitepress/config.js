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
						items: [{ text: '按钮', link: '/component/button' }]
					}
				]
			}
		]
	}
};
