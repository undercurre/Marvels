<template>
	<MSwitch v-model:value="theme"></MSwitch>
</template>

<script lang="ts" setup>
import { MSwitch } from 'marvels-plus/src/';
import { ref } from 'vue';

const theme = ref(true);
</script>
