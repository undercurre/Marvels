<template>
	<MLoading :is-loading="loading"></MLoading>
</template>

<script lang="ts" setup>
import { MLoading } from 'marvels-plus/src/';
import { ref } from 'vue';

const loading = ref(false);
</script>
