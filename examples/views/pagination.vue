<template>
	<MPagination v-model:active="active" :max="6"></MPagination>
</template>

<script lang="ts" setup>
import { MPagination } from 'marvels-plus/src/';
import { ref } from 'vue';

const active = ref(2);
</script>
