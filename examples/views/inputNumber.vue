<template>
	<MInputNumber ref="counter" :value="2"></MInputNumber>
	<MButton @click="add2point(1)">罚球</MButton>
	<MButton @click="add2point(2)">两分球</MButton>
	<MButton @click="add2point(3)">三分球</MButton>
</template>

<script lang="ts" setup>
import { MInputNumber, MButton } from 'marvels-plus/src/';
import { ref } from 'vue';

const counter = ref<HTMLElement | null>(null);

function add2point(point: number) {
	if (counter.value) {
		console.log(point);
		counter.value.addition(point);
	}
}
</script>
