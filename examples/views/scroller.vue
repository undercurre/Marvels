<template>
	<MScrollbar :height="100">
		<ul>
			<li v-for="i in 100" :key="i">{{ i }}</li>
		</ul>
	</MScrollbar>
</template>

<script lang="ts" setup>
import { MScrollbar } from 'marvels-plus/src/';
</script>
