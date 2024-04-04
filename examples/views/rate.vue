<template>
	<MRate v-model:value="rate" @change="getRate"></MRate>
</template>

<script lang="ts" setup>
import { MRate } from 'marvels-plus/src/';
import { ref } from 'vue';

const rate = ref(2);

function getRate(rate: number) {
	console.log(rate);
}
</script>
