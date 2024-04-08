# Upload 上传

<div style="margin: 60px">
	<div style="position: relative;">
		<MUpload @upload="handle2Sever"></MUpload>
	</div>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

function handle2Sever(file) {
	console.log('上传服务器', file);
}
</script>

```vue
<template>
	<MUpload @upload="handle2Sever"></MUpload>
</template>

<script lang="ts" setup>
import { MUpload } from 'marvels-plus/src/';

function handle2Sever(file) {
	console.log('上传服务器', file);
}
</script>
```

# API

## Props

| 参数  | 说明   | 类型    | 默认值 |
| ----- | ------ | ------- | ------ |
| value | 开关值 | Boolean | false  |
