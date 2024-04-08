# InputNumber 计分器

<div style="margin: 60px;">
    <div class="container">
    		<MInputNumber ref="counter" :value="2"></MInputNumber>
	<MButton @click="add2point(1)">罚球</MButton>
	<MButton @click="add2point(2)">两分球</MButton>
	<MButton @click="add2point(3)">三分球</MButton>
    </div>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const counter = ref<HTMLElement | null>(null);

function add2point(point: number) {
	if (counter.value) {
		console.log(point);
		counter.value.addition(point);
	}
}
</script>

```vue
<template>
	<MInputNumber ref="counter" :value="2"></MInputNumber>
	<MButton @click="add2point(1)">罚球</MButton>
	<MButton @click="add2point(2)">两分球</MButton>
	<MButton @click="add2point(3)">三分球</MButton>
</template>

<script lang="ts" setup>
import { MInputNumber, MButton } from 'marvels-plus/src/';
import { ref } from 'vue';

const counter = ref<HTMLElement | null>(null);

function add2point(point: number) {
	if (counter.value) {
		console.log(point);
		counter.value.addition(point);
	}
}
</script>
```

# API

## Props

| 参数  | 说明   | 类型   | 默认值 |
| ----- | ------ | ------ | ------ |
| value | 当前值 | Number | ——     |
