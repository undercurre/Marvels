# Slider 滑块

<div style="margin: 60px">
   <MSlider v-model:value="rate" @changed="getRate"></MSlider>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const rate = ref(20);
</script>

```vue
<template>
	<div style="width: 500px; margin: 20px 100px">
		<MSlider v-model:value="rate" @changed="getRate"></MSlider>
	</div>
</template>

<script lang="ts" setup>
import { MSlider } from 'marvels-plus/src/';
import { ref } from 'vue';

const rate = ref(20);

function getRate(rate: number) {
	console.log(rate);
}
</script>
```

# API

## Props

| 参数  | 说明   | 类型   | 默认值 |
| ----- | ------ | ------ | ------ |
| value | 当前值 | Number | ——     |

## Events

| 事件名称 | 说明       | 回调参数     |
| -------- | ---------- | ------------ |
| changed  | 滑动时触发 | rate: Number |
