<template>
	<div class="container">
		<m-radio id="my1" v-model="checked1" label="Option 1" />
		<m-radio id="my2" v-model="checked2" label="Option 2" />
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	margin: 20px;
}
</style>

<script lang="ts" setup>
import { MRadio } from 'marvels-plus/src/';

import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
</script>
