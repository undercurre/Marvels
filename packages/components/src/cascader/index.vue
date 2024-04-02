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
				<ul v-show="isOpen" class="dropdown-list">
					<li
						v-for="item in options"
						:key="item.value"
						@click="selectItem({ item: item, level: level })"
					>
						{{ item.label }}
					</li>
				</ul>

				<SelectList
					:is-open="Boolean(selectedItem)"
					class="select_list"
					:value="optionsInner"
					:level="level + 1"
					@updateValue="selectItem"
					:options="selectedItem ? selectedItem.children : []"
				></SelectList>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { ref, computed, watch, provide } from 'vue';
import { MIcon } from '../icon';
import SelectList from './components/selectList.vue';

export type OptionsItem = {
	label: string;
	value: string;
	children: OptionsItem[];
};

export default {
	name: 'MCascader',
	components: {
		MIcon,
		SelectList
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
				console.log(
					'选中',
					props.options.find((option) => option.value === optionsInner.value[level].value)
				);
				return props.options.find((option) => option.value === optionsInner.value[level].value);
			} else {
				return '';
			}
		});

		const toggleDropdown = () => {
			isOpen.value = !isOpen.value;
		};

		const selectItem = (data) => {
			if (optionsInner.value[data.level]) {
				optionsInner.value[data.level] = data.item;
				console.log('replace', optionsInner.value);
			} else {
				optionsInner.value.push(data.item);
				console.log('push', optionsInner);
			}
			emit('update:value', optionsInner.value);
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
	border-radius: 5px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.dropdown-wrapper {
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
	border: 1px solid #ccc;
	border-top: none;
	border-right: none;
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

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
