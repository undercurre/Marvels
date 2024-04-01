<template>
	<div class="dropdown-wrapper">
		<ul v-show="isOpen" class="dropdown-list">
			<li v-for="item in options" :key="item.value" @click="selectItem(item)">
				{{ item.label }}
			</li>
		</ul>
		<SelectList
			v-if="selectedItem"
			:is-open="Boolean(selectedItem)"
			:value="value"
			class="select_list"
			:options="selectedItem ? selectedItem.children : []"
		></SelectList>
	</div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import type { OptionsItem } from '../index.vue';

export default {
	name: 'SelectList',
	props: {
		isOpen: {
			type: Boolean,
			default: false
		},
		options: {
			type: Array<OptionsItem>,
			required: true
		},
		value: {
			type: Array<OptionsItem>,
			required: true
		}
	},
	setup(props, { emit }) {
		const selectedItem = computed(() => {
			return props.options.find((option) => option.value === props.value);
		});

		const selectItem = (item) => {
			console.log(item);
			emit('updateValue', item.value);
		};

		return {
			selectedItem,
			selectItem
		};
	}
};
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
}

.select_list {
	position: absolute;
	left: 100%;
}

.dropdown-list-inner {
	list-style: none;
	margin: 0;
	padding: 0;
	border: 1px solid #ccc;
	border-left: none;
	width: 99%;
	background-color: #fff;
	z-index: 10;
}

.dropdown-list li {
	padding: 10px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.dropdown-list li:hover {
	background-color: #f0f0f0;
}
</style>
