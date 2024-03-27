<template>
	<MTab style="margin-top: 40px" :tabs="tabs"></MTab>
</template>

<script lang="ts" setup>
import { MTab } from 'marvels/src/';

const tabs = ['标签一', '标签二', '标签三', '标签四'];
</script>
