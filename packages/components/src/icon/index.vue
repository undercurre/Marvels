<template>
	<iconify-icon
		:icon="name"
		:color="color"
		:height="size"
		:width="size"
		:flip="flip"
		:rotate="rotate"
	/>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
	name: 'MIcon',
	components: { IconifyIcon: Icon },
	props: {
		name: {
			type: String,
			required: true
		},
		color: String,
		size: [String, Number],
		flip: String,
		rotate: Number
	},
	computed: {
		className() {
			return {
				icon: true,
				[`icon-${this.name}`]: true
			};
		}
	}
};
</script>
