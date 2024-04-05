<template>
	<div style="width: 500px; margin-left: 20px">
		<MSlider v-model:value="rate" @changed="getRate"></MSlider>
	</div>
</template>

<script lang="ts" setup>
import { MSlider } from 'marvels-plus/src/';
import { ref } from 'vue';

const rate = ref(20);

function getRate(rate: number) {
	console.log(rate);
}
</script>
