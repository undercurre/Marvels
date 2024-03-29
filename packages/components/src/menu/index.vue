<template>
	<ul
		class="menu"
		:class="{ 'menu--horizontal': mode === 'horizontal', 'menu--collapse': collapse }"
	>
		<li
			v-for="(item, index) in items"
			:key="index"
			:class="{ 'menu-item': true, 'is-active': item.active, 'is-disabled': item.disabled }"
			@click="handleItemClick(item)"
		>
			<div class="menu-item__content">
				<i v-if="item.icon" :class="item.icon"></i>
				<span class="menu-item__title">{{ item.label }}</span>
				<i
					v-if="item.children && item.children.length"
					:class="['icon-arrow-down', 'menu-item__arrow', { 'is-active': item.active }]"
				></i>
			</div>
			<menu
				v-if="item.children && item.children.length"
				v-show="!collapse && item.active"
				:items="item.children"
				@itemClick="handleChildItemClick"
				:mode="mode"
				:collapse="collapse"
			/>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface MenuItem {
	label: string;
	active?: boolean;
	disabled?: boolean;
	icon?: string;
	children?: MenuItem[];
}

export default defineComponent({
	name: 'MMenu',
	props: {
		items: {
			type: Array as PropType<MenuItem[]>,
			default: () => [
				{
					label: 'demo1',
					active: true,
					children: [
						{
							label: 'demo5'
						},
						{
							label: 'demo6'
						},
						{
							label: 'demo7'
						}
					]
				},
				{
					label: 'demo2'
				},
				{
					label: 'demo3'
				},
				{
					label: 'demo4'
				}
			],
			required: true
		},
		mode: {
			type: String as PropType<'vertical' | 'horizontal'>,
			default: 'vertical'
		},
		collapse: {
			type: Boolean,
			default: true
		}
	},
	setup(props, { emit }) {
		const handleItemClick = (item: MenuItem) => {
			if (!item.children || !item.children.length) {
				emit('itemClick', item);
			}
		};

		const handleChildItemClick = (item: MenuItem) => {
			emit('itemClick', item);
		};

		return { handleItemClick, handleChildItemClick };
	}
});
</script>

<style>
.menu {
	list-style: none;
	padding: 0;
}

.menu-item {
	cursor: pointer;
	padding: 10px;
}

.menu-item.is-active {
	background-color: #f0f0f0;
}

.menu-item.is-disabled {
	cursor: not-allowed;
}

.menu-item__content {
	display: flex;
	align-items: center;
}

.menu-item__title {
	margin-left: 10px;
}

.menu-item__arrow {
	margin-left: auto;
}

.menu--horizontal {
	display: flex;
}

.menu--collapse .menu-item__content {
	justify-content: center;
}

.menu--collapse .menu-item__title {
	display: none;
}

.menu--collapse .menu-item__arrow {
	margin-left: 0;
}

.menu--collapse .menu-item.is-active .menu-item__arrow {
	transform: rotate(180deg);
}
</style>
