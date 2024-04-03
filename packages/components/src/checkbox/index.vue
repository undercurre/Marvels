<template>
	<div class="container">
		<input type="checkbox" :id="id" :checked="isChecked" @change="toggleChecked" />
		<label :for="id" @click="clickChecked">
			<MIcon class="icon" name="material-symbols:library-add-check"></MIcon>
		</label>
		<span class="label">{{ label }}</span>
	</div>
</template>

<style lang="scss" scoped>
$shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #716f6f;
$inner-shadow: inset 0.2rem 0.2rem 0.5rem #d0d2d8, inset -0.2rem -0.2rem 0.5rem #ffffff;

.container {
	width: 110px;
	display: flex;
	justify-content: center;
	input {
		display: none;
		&:checked {
			& ~ label {
				box-shadow: $inner-shadow;
				.icon {
					color: #6d5dfc;
				}
			}
		}
	}

	label {
		box-shadow: $shadow;
		cursor: pointer;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		width: 35px;
		height: 35px;

		&:hover .icon {
			color: #6d5dfc;
		}

		.icon {
			font-size: 1.8rem;
			font-weight: 700;
			color: #9baacf;
			transition: all 0.3s ease;
		}
	}

	.label {
		height: 35px;
		font-size: 14px;
		line-height: 35px;
		margin-left: 10px;
		font-weight: 700;
	}
}
</style>

<script>
import { ref, watch } from 'vue';
import MIcon from '../icon';

export default {
	name: 'MCheckbox',
	components: {
		MIcon
	},
	props: {
		label: {
			type: String,
			required: true
		},
		value: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { emit }) {
		const isChecked = ref(props.value);

		const toggleChecked = (event) => {
			isChecked.value = event.target.checked;
			emit('update:value', isChecked.value);
		};

		const clickChecked = () => {
			isChecked.value = !isChecked.value;
			emit('update:value', isChecked.value);
		};

		watch(
			() => props.value,
			(newValue) => {
				isChecked.value = newValue;
			}
		);

		return {
			isChecked,
			clickChecked,
			toggleChecked
		};
	}
};
</script>
