<template>
	<div class="select-container">
		<div
			class="selected-item"
			@click="toggleDropdown"
			:style="{ color: selectedItem ? '#000' : '#ccc' }"
		>
			{{ value.length ? value.map((item) => item.label).join('/') : placeholder }}
			<MIcon size="30" name="material-symbols:keyboard-arrow-down-rounded" color="#ccc"></MIcon>
		</div>
		<transition name="fade">
			<div class="dropdown-wrapper">
				<MScrollbar v-show="isOpen" width="100%" :height="198" class="dropdown-list_first">
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
					:is-open="Boolean(selectedItem) && isOpen"
					class="select_list"
					:level="level + 1"
					@updateValue="selectItem"
					:options="selectedItem.children ? selectedItem.children : []"
				></SelectList>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { ref, computed, watch, provide } from 'vue';
import { MIcon } from '../icon';
import SelectList from './components/selectList.vue';

import MScrollbar from '../scrollbar/index.vue';

export type OptionsItem = {
	label: string;
	value: string;
	children?: OptionsItem[];
};

export default {
	name: 'MCascader',
	components: {
		MIcon,
		SelectList,
		MScrollbar
	},
	props: {
		options: {
			type: Array<OptionsItem>,
			required: true
		},
		value: {
			type: Array<OptionsItem>,
			required: true
		},
		placeholder: {
			type: String,
			default: 'Select an option'
		}
	},
	setup(props, { emit }) {
		const optionsInner = ref<OptionsItem[]>([]);
		const level = 0;
		const isOpen = ref(false);
		const selectedItem = computed(() => {
			if (optionsInner.value[level]) {
				let selected = props.options.find(
					(option) => option.value === optionsInner.value[level].value
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

		const toggleDropdown = () => {
			isOpen.value = !isOpen.value;
		};

		const selectItem = (data) => {
			if (optionsInner.value[data.level]) {
				optionsInner.value[data.level] = data.item;
			} else {
				optionsInner.value.push(data.item);
			}
			if (!data.item.children) {
				toggleDropdown();
				emit('update:value', optionsInner.value);
				emit('change', optionsInner.value);
			}
		};

		watch(
			() => props.value,
			(newValue) => {
				optionsInner.value = newValue;
			},
			{ immediate: true }
		);

		provide('optionsInner', optionsInner);

		return {
			isOpen,
			optionsInner,
			level,
			selectedItem,
			toggleDropdown,
			selectItem
		};
	},
	computed: {}
};
</script>

<style scoped>
.select-container {
	position: relative;
}

.selected-item {
	cursor: pointer;
	padding: 10px;
	border: 1px solid #ccc;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

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

.dropdown-list_first {
	list-style: none;
	height: 200px;
	margin: 0;
	padding: 0;
	border: 1px solid #ccc;
	border-top: none;
	border-right: none;
	width: 99%;
	background-color: #fff;
	z-index: 10;
}

.dropdown-list_first li {
	padding: 10px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.dropdown-list_first li:hover {
	background-color: #f0f0f0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
