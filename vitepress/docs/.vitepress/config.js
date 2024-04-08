export default {
	base: '/Marvels-Dosc/',
	title: 'Marvels',
	description: 'Just playing around.',
	appearanece: false,
	themeConfig: {
		nav: [
			{ text: '指南', link: '/guild/install' },
			{
				text: '组件',
				link: '/component/button'
			}
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/undercurre/Marvels' }],
		sidebar: {
			'/guild/': [
				{
					text: '指南',
					items: [
						{
							text: '基础',
							items: [
								{ text: '安装', link: '/guild/install' },
								{ text: '快速开始', link: '/guild/start' }
							]
						},
						{
							text: '开发',
							items: [
								{
									text: '开发指南',
									link: '/guild/develop'
								}
							]
						}
					]
				}
			],
			'/component/': [
				{
					text: '组件',
					items: [
						{
							text: 'Basic 基础组件',
							items: [
								{ text: 'Button 按钮', link: '/component/button' },
								{ text: 'Icon 图标', link: '/component/icon' },
								{ text: 'Layout 布局', link: '/component/layout' },
								{ text: 'Link 链接', link: '/component/link' }
							]
						},
						{
							text: 'Form 表单组件',
							items: [
								{ text: 'Input 输入框', link: '/component/input' },
								{
									text: 'Cascader 级联选择器',
									link: '/component/cascader'
								},
								{
									text: 'Checkbox 多选框',
									link: '/component/checkbox'
								},
								{
									text: 'ColorPicker 颜色选择器',
									link: '/component/colorPicker'
								},
								{
									text: 'InputNumber 计分器',
									link: '/component/inputNumber'
								}
							]
						},
						{
							text: 'Data 数据展示',
							items: [
								{ text: 'Card 卡片', link: '/component/card' },
								{
									text: 'Cloud 云',
									link: '/component/cloud'
								},
								{
									text: 'Calendar 日历',
									link: '/component/calendar'
								},
								{
									text: 'Carousel 轮播',
									link: '/component/carousel'
								},
								{
									text: 'Clock 倒计时',
									link: '/component/clock'
								},
								{
									text: 'Collapse 折叠面板',
									link: '/component/collapse'
								}
							]
						},
						{
							text: 'Feedback 反馈组件',
							items: [
								{ text: 'Alert 提示', link: '/component/alert' },
								{
									text: 'Loading 加载',
									link: '/component/loading'
								}
							]
						},
						{
							text: 'Navigation 导航组件',
							items: [
								{
									text: 'Float 浮动按钮',
									link: '/component/float'
								}
							]
						},
						{
							text: 'Others 其他',
							items: [
								{
									text: 'Divider 分割线',
									link: 'component/divider'
								}
							]
						}
					]
				}
			]
		}
	}
};
