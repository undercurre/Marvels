<template>
	<div class="layout">
		<div class="sidebar">
			<div class="sidebar_content">
				<div class="headline">
					<div class="logo">{{ logo }}</div>
					<h5>{{ headline }}</h5>
				</div>
				<m-menu :items="items" @select="menuSelect"></m-menu>
			</div>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout {
	display: flex;
	height: 100%;
}

.sidebar {
	flex: 0 0 auto;
	width: 300px;
	background-color: #0c1e35;
	.sidebar_content {
		color: #7d84ab;
		.headline {
			padding: 20px;
			display: flex;
			justify-self: center;
			align-items: center;
			height: 70px;

			.logo {
				width: 35px;
				height: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				line-height: 35px;
				border-radius: 8px;
				color: white;
				font-size: 24px;
				font-weight: 700;
				background-color: #ff8100;
				margin-right: 10px;
			}
			h5 {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 20px;
				line-height: 30px;
				transition: opacity 0.3s;
				opacity: 1;
			}
		}
		.menu {
			display: flex;
			flex-direction: column;
			.theme {
				height: 40px;
				box-sizing: border-box;
				font-weight: 900;
				padding: 10px 0;
				font-size: 0.8em;
				letter-spacing: 2px;
				transition: opacity 0.3s;
				opacity: 0.5;
			}
			.items {
				.item {
					display: flex;
					align-items: center;
					height: 50px;
					.icon_wrapper {
						width: 35px;
						height: 35px;
						margin-right: 10px;
						display: grid;
						place-content: center;
					}
					.text {
						font-size: 0.9em;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						flex-grow: 1;
						transition: color 0.3s;
					}
				}
			}
		}
	}
}

.content {
	flex: 1;
	padding: 10px 20px;
}

ul {
	list-style: none;
}
</style>
<script lang="ts">
import MMenu from './../menu/index.vue';
import type { MenuItem } from './../menu/index.vue';

type LayoutMenu = Array<{
	theme: string;
	menu: Array<{
		icon: string;
		text: string;
	}>;
}>;

export default {
	name: 'MLayout',
	components: {
		MMenu
	},
	props: {
		headline: {
			type: String,
			default: 'Marvels'
		},
		menu: {
			type: Array as () => LayoutMenu,
			default: () => [
				{
					theme: 'general',
					items: [
						{
							icon: 'material-symbols:mp',
							text: 'demo1'
						},
						{
							icon: 'material-symbols:2mp',
							text: 'demo1'
						}
					]
				},
				{
					theme: 'extra',
					items: [
						{
							icon: 'material-symbols:3mp',
							text: 'demo3'
						},
						{
							icon: 'material-symbols:4mp',
							text: 'demo4'
						}
					]
				}
			]
		}
	},
	computed: {
		logo() {
			return this.headline.slice(0, 1).toUpperCase();
		}
	},
	setup() {
		const items = [
			{
				label: 'demo1',
				icon: 'material-symbols:mp',
				active: true,
				children: [
					{
						label: 'demo5',
						icon: 'material-symbols:5mp',
						children: [
							{
								label: 'demo10',
								icon: 'material-symbols:10mp'
							},
							{
								label: 'demo11',
								icon: 'material-symbols:11mp'
							}
						]
					},
					{
						label: 'demo6',
						icon: 'material-symbols:6mp'
					},
					{
						label: 'demo7',
						icon: 'material-symbols:7mp'
					}
				]
			},
			{
				label: 'demo2',
				icon: 'material-symbols:2mp'
			},
			{
				label: 'demo3',
				icon: 'material-symbols:3mp',
				children: [
					{
						label: 'demo8',
						icon: 'material-symbols:8mp'
					},
					{
						label: 'demo9',
						icon: 'material-symbols:9mp'
					}
				]
			},
			{
				label: 'demo4',
				icon: 'material-symbols:4mp'
			}
		];

		function menuSelect(item: MenuItem) {
			console.log('选择了', item);
		}
		return { menuSelect, items };
	}
};
</script>
