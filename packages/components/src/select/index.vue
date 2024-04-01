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
					<li v-for="item in options" :key="item.value" @click="selectItem(item)">
						{{ item.label }}
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import { MIcon } from '../icon';

export default {
	name: 'MSelect',
	components: {
		MIcon
	},
	props: {
		options: {
			type: Array,
			required: true
		},
		value: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: 'Select an option'
		}
	},
	setup(props, { emit }) {
		const isOpen = ref(false);
		const selectedItem = computed(() => {
			return props.options.find((option) => option.value === props.value);
		});

		const toggleDropdown = () => {
			isOpen.value = !isOpen.value;
		};

		const selectItem = (item) => {
			console.log(item);
			emit('update:value', item.value);
			isOpen.value = false;
		};

		return {
			isOpen,
			selectedItem,
			toggleDropdown,
			selectItem
		};
	},
	computed: {}
};
</script>

<style>
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
}

.dropdown-list {
	list-style: none;
	margin: 0;
	padding: 0;
	border: 1px solid #ccc;
	border-top: none;
	border-radius: 0 0 5px 5px;
	position: absolute;
	width: 99%;
	background-color: #fff;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
