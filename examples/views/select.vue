<template>
	<div style="width: 30%; margin-left: 20px">
		<h2>Vue 3 Select Component Demo</h2>
		<MSelect :options="options" v-model:value="selectedItem" />
		<p>Selected Item: {{ selectedItem }}</p>
	</div>
</template>

<script lang="ts" setup>
import { MSelect } from 'marvels-plus/src';
import { ref } from 'vue';

const options = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
	{ label: 'Option 4', value: 'option4' },
	{ label: 'Option 5', value: 'option5' }
];

const selectedItem = ref('');
</script>
