<template>
	<div class="select-container">
		<div
			class="selected-item"
			@click="toggleDropdown"
			:style="{ color: selectedItem ? '#000' : '#ccc' }"
		>
			{{ selectedItem ? selectedItem.label : placeholder }}
			<MIcon size="30" name="material-symbols:keyboard-arrow-down-rounded" color="#ccc"></MIcon>
		</div>
		<transition name="fade">
			<div class="dropdown-wrapper">
				<ul v-show="isOpen" class="dropdown-list">
					<li v-for="item in optionsInner" :key="item.value" @click="selectItem(item)">
						{{ item.label }}
					</li>
				</ul>

				<SelectList
					:is-open="Boolean(selectedItem)"
					class="select_list"
					:value="value"
					@updateValue="selectItem"
					:options="selectedItem ? selectedItem.children : []"
				></SelectList>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { ref, computed, watch } from 'vue';
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
		const isOpen = ref(false);
		const selectedItem = computed(() => {
			console.log(
				'已选中',
				optionsInner.value.find((option) => option.value === props.value)
			);
			return optionsInner.value.find((option) => option === props.value);
		});

		const toggleDropdown = () => {
			isOpen.value = !isOpen.value;
		};

		const selectItem = (item) => {
			optionsInner.value.push(item);
			emit('update:value', optionsInner.value);
			// isOpen.value = false;
		};

		watch(
			() => props.options,
			(newValue) => {
				optionsInner.value = newValue;
			}
		);

		return {
			isOpen,
			optionsInner,
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
