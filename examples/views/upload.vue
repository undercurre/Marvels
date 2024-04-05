<template>
	<MUpload @upload="handle2Sever"></MUpload>
</template>

<script lang="ts" setup>
import { MUpload } from 'marvels-plus/src/';

function handle2Sever(file) {
	console.log('上传服务器', file);
}
</script>
