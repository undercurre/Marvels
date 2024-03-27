<template>
	<MButton type="rainbow" style="margin-right: 10px">rainbow</MButton>

	<MButton type="rainbow" style="margin-right: 10px" :disabled="true">rainbow</MButton>

	<MButton type="rainbow-shadow" style="margin-right: 10px">rainbow-shadow</MButton>

	<MButton type="rainbow-shadow" style="margin-right: 10px" :disabled="true"
		>rainbow-shadow</MButton
	>
	<MButton type="flow" style="margin-right: 10px">flow</MButton>

	<MButton type="flow" style="margin-right: 10px" :disabled="true">flow</MButton>
</template>

<script lang="ts" setup>
import { MButton } from 'marvels-plus/src/';
</script>
