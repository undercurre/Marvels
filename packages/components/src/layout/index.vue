<template>
	<div class="layout">
		<div class="sidebar">
			<div class="sidebar_content">
				<div class="headline">
					<div class="logo">{{ logo }}</div>
					<h5>{{ headline }}</h5>
				</div>
				<ul class="menu">
					<li v-for="m in menu" :key="m.theme">
						<span class="theme">{{ m.theme.toUpperCase() }}</span>
						<ul class="items">
							<li class="item" v-for="i in m.items" :key="i.text">
								<div class="icon_wrapper">
									<m-icon size="24" :name="i.icon"></m-icon>
								</div>
								<span class="text">{{ i.text }}</span>
							</li>
						</ul>
					</li>
				</ul>
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
		padding: 20px;
		color: #7d84ab;
		.headline {
			display: flex;
			justify-self: center;
			align-items: center;
			height: 70px;
			margin-bottom: 30px;

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
// 参考源码
// https://codepen.io/azouaoui-med/pen/wpBadb
import MIcon from './../icon/index.vue';

type LayoutMenu = Array<{
	theme: string;
	items: Array<{
		icon: string;
		text: string;
	}>;
}>;

export default {
	name: 'MLayout',
	components: {
		MIcon
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
			return this.headline.slice(0, 1);
		}
	},
	setup() {
		return {};
	}
};
</script>
