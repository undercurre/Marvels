<template>
	<MCollapse title="标题" :items="list" v-model:active="active"></MCollapse>
</template>

<script lang="ts" setup>
import { MCollapse } from 'marvels-plus/src/';
import { ref } from 'vue';

const active = ref(false);

const list = ref(['link1', 'link2']);
</script>
