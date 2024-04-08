# ColorPicker 取色器

<div style="margin: 260px;">
	<MColorPicker v-model:value="colors"></MColorPicker>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const colors = ref({
	h: 300,
	s: 80,
	l: 90
});
</script>

```vue
<template>
	<div
		style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"
	>
		<m-colorPicker v-model:value="colors"></m-colorPicker>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const colors = ref({
	h: 300,
	s: 80,
	l: 90
});

watch(
	() => colors.value,
	() => {
		console.log(colors.value);
	}
);
</script>
```

# API

## Props

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 当前颜色 | Object | ——     |
