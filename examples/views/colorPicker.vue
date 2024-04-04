<template>
	<div
		style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"
	>
		<MColorPicker v-model:value="colors"></MColorPicker>
	</div>
</template>

<script lang="ts" setup>
import { MColorPicker } from 'marvels-plus/src/';
import { ref, watch } from 'vue';

const colors = ref({
	h: 300,
	s: 80,
	l: 90
});

watch(
	() => colors.value,
	() => {
		console.log(colors.value);
	}
);
</script>
