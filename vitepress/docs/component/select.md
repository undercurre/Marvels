# Select 选择器

<div style="margin: 60px">
    <MSelect :options="options" v-model:value="selectedItem" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const options = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
	{ label: 'Option 4', value: 'option4' },
	{ label: 'Option 5', value: 'option5' }
];

const selectedItem = ref('');
</script>

```vue
<template>
	<MSelect :options="options" v-model:value="selectedItem" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
	{ label: 'Option 4', value: 'option4' },
	{ label: 'Option 5', value: 'option5' }
];

const selectedItem = ref('');
</script>
```

# API

## Props

| 参数    | 说明   | 类型   | 默认值 |
| ------- | ------ | ------ | ------ |
| options | 选项   | Object | ——     |
| value   | 当前值 | String | ——     |
