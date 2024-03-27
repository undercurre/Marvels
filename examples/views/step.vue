<template>
	<MSteps :steps="steps" v-model:selected="selectedStep"></MSteps>
</template>

<script lang="ts" setup>
import { MSteps } from 'marvels/src/';
import { ref } from 'vue';

const steps: Array<{
	title: string;
	description: string;
}> = [
	{
		title: 'Start order',
		description:
			'0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Prepare gift',
		description:
			'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Pack gift',
		description:
			'22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Decorate box',
		description:
			'333Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Send gift',
		description:
			'4444Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	}
];

const selectedStep = ref(3);
</script>
