<template>
	<div class="container">
		<label :for="id">
			<input type="checkbox" :id="id" :checked="isChecked" @change="toggleChecked" />
			{{ label }}
			<MIcon class="icon" name="material-symbols:library-add-check"></MIcon>
		</label>
	</div>
</template>

<style lang="scss" scoped>
$shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);
$inner-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
	inset -0.2rem -0.2rem 0.5rem var(--white);

.container {
	width: 6rem;
	display: flex;
	justify-content: center;
	label {
		box-shadow: $shadow;
		cursor: pointer;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.5rem;
		width: 2.8rem;
		height: 2.8rem;

		&:hover i {
			color: #6d5dfc;
		}

		.icon {
			font-size: 1.8rem;
			font-weight: 700;
			color: #9baacf;
			transition: 0.3s ease;
		}
	}

	& input:checked {
		& ~ label {
			box-shadow: $inner-shadow;
			i {
				color: #6d5dfc;
			}
		}
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
		id: {
			type: String,
			required: true
		},
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

		watch(
			() => props.value,
			(newValue) => {
				isChecked.value = newValue;
			}
		);

		return {
			isChecked,
			toggleChecked
		};
	}
};
</script>
