<template>
	<ul
		class="menu"
		:class="{ 'menu--horizontal': mode === 'horizontal', 'menu--collapse': collapse }"
	>
		<li
			v-for="item in itemsInner"
			:key="item.label"
			:style="{
				height: item.active && item.children ? 'auto' : '70px'
			}"
			class="menu-item"
			:class="{ 'is-active': item.active, 'is-disabled': item.disabled }"
			@click.stop="handleItemClick(item)"
		>
			<div class="menu-item__content">
				<div class="icon_wrapper">
					<MIcon v-if="item.icon" size="30" :name="item.icon" :class="item.icon"></MIcon>
				</div>
				<span class="menu-item__title">{{ item.label }}</span>
				<MIcon
					name="material-symbols:arrow-forward-ios-rounded"
					v-if="item.children && item.children.length"
					class="icon-arrow-down menu-item__arrow"
					:class="{ 'is-active': item.active }"
				></MIcon>
			</div>
			<MMenu
				v-if="item.children && item.children.length"
				v-show="!collapse && item.active"
				:items="item.children"
				@select="handleChildItemClick"
				:mode="mode"
				:collapse="collapse"
			/>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import type { PropType } from 'vue';
import MIcon from '../icon';

export type MenuItem = {
	label: string;
	active?: boolean;
	disabled?: boolean;
	icon?: string;
	children?: MenuItem[];
};

export default defineComponent({
	name: 'MMenu',
	components: {
		MIcon
	},
	props: {
		items: {
			type: Array as PropType<MenuItem[]>,
			required: true
		},
		mode: {
			type: String as PropType<'vertical' | 'horizontal'>,
			default: 'vertical'
		},
		collapse: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { emit }) {
		const itemsInner = ref<MenuItem[]>();

		const handleItemClick = (item: MenuItem) => {
			if (!item.children || !item.children.length) {
				return;
			}
			item.active = !item.active;
			console.log('父点击', item);
			emit('select', item);
		};

		const handleChildItemClick = (item: MenuItem) => {
			if (item.children && item.children.length > 1) {
				return;
			}
			item.active = !item.active;
			console.log('子点击', item);
			emit('select', item);
		};

		watch(
			() => props.items,
			(newValue) => {
				itemsInner.value = newValue;
			}
		);

		onMounted(() => {
			itemsInner.value = props.items;
		});

		return { itemsInner, handleItemClick, handleChildItemClick };
	}
});
</script>

<style lang="scss">
.menu {
	color: #7d84ab;
	min-height: 50px;
	list-style: none;
	padding: 0;
	background-color: #0c1e35;
}

.menu-item {
	box-sizing: border-box;
	cursor: pointer;
	padding: 10px;
	transition: height 0.8s ease;
	overflow: hidden;
	.menu-item {
		background-color: rgba(11, 26, 44, 0.6);
	}
}

.menu-item:hover {
	color-scheme: initial;
	color: #dee2ec;
}

.menu-item.is-active {
	color-scheme: initial;
	color: #dee2ec;
	.menu-item {
		color: #7d84ab;
	}
	.menu-item:hover {
		color: #dee2ec;
	}
	background-color: rgba(11, 26, 44, 0.6);
	transition: height 0.8s ease;
}

.menu-item.is-disabled {
	cursor: not-allowed;
}

.menu-item__content {
	display: flex;
	align-items: center;
	height: 50px;
}

.menu-item__title {
	font-size: 0.9em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex-grow: 1;
	transition: color 0.3s;
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

.menu--collapse .menu-item__arrow {
	margin-left: 0;
}

.menu-item.is-active {
	.menu-item__arrow {
		transform: rotate(90deg);
	}
	transition: all 0.3s ease;
	.menu-item .menu-item__arrow {
		transform: rotate(0deg);
	}
	.menu-item.is-active .menu-item__arrow {
		transform: rotate(90deg);
		transition: all 0.3s ease;
	}
}

.icon_wrapper {
	width: 35px;
	height: 35px;
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
