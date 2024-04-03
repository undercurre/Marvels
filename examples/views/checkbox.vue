<template>
	<div>
		<m-checkbox id="my1" v-model="checked1" label="Option 1" />
		<m-checkbox id="my2" v-model="checked2" label="Option 2" />
	</div>
</template>

<script lang="ts" setup>
import { MCheckbox } from 'marvels-plus/src/';

import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
</script>
