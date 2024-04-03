<template>
	<div class="dropdown-wrapper">
		<MScrollbar v-show="isOpen" width="100%" :height="198" class="dropdown-list">
			<ul>
				<li
					v-for="item in options"
					:key="item.value"
					@click="selectItem({ item: item, level: level })"
				>
					{{ item.label }}
				</li>
			</ul>
		</MScrollbar>
		<SelectList
			v-if="selectedItem.children?.length && isOpen"
			:is-open="Boolean(selectedItem)"
			:level="next"
			class="select_list"
			@updateValue="selectItem"
			:options="selectedItem.children ? selectedItem.children : []"
		></SelectList>
	</div>
</template>

<script lang="ts">
import { computed, inject } from 'vue';
import type { Ref } from 'vue';
import type { OptionsItem } from '../index.vue';
import MScrollbar from '../../scrollbar/index.vue';

export default {
	name: 'SelectList',
	components: {
		MScrollbar
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false
		},
		options: {
			type: Array<OptionsItem>,
			required: true
		},
		level: {
			type: Number,
			required: true
		}
	},
	setup(props, { emit }) {
		let optionsInner = inject<Ref<Array<OptionsItem>>>('optionsInner')!;
		const next = props.level + 1;
		const selectedItem = computed(() => {
			if (optionsInner.value[props.level]) {
				const selected = props.options.find(
					(option) => option.value === optionsInner.value[props.level].value
				);
				if (selected) {
					return selected;
				} else {
					return {
						value: '',
						label: '',
						children: []
					};
				}
			} else {
				return {
					value: '',
					label: '',
					children: []
				};
			}
		});

		const selectItem = (data) => {
			emit('updateValue', data);
		};

		return {
			selectedItem,
			next,
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

.dropdown-list {
	list-style: none;
	margin: 0;
	padding: 0;
	border-radius: 0;
	border: 1px solid #ccc;
	border-left: none;
	width: 100%;
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
