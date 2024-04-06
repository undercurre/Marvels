<template>
	<MCarousel :imgs="imgs"></MCarousel>
</template>

<script lang="ts" setup>
import { MCarousel } from 'marvels-plus/src/';
import { ref } from 'vue';

const imgs = ref<Array<string>>([
	'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]);
</script>
