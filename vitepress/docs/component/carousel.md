# Carousel 轮播

<div style="height: 500px; margin: 60px;">
<MCarousel :imgs="imgs"></MCarousel>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const imgs = ref<Array<string>>([
	'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]);
</script>

```vue
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
```

# API

## Props

| 参数 | 说明     | 类型           | 默认值 |
| ---- | -------- | -------------- | ------ |
| imgs | 图片数组 | [File, string] | ——     |
