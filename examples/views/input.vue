<template>
	<MInput
		style="margin: 40px"
		class="password"
		v-model:value="password"
		input-key="password"
		label="密码"
	></MInput>
</template>

<script lang="ts" setup>
import { MInput } from 'marvels/src/';
import { ref } from 'vue';

const password = ref('');
</script>
