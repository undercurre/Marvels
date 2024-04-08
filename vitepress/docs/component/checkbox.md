# Checkbox 多选框

<div style="margin: 60px;">
    <div class="container">
    	<m-checkbox id="my1" v-model="checked1" label="Option 1" />
    	<m-checkbox id="my2" v-model="checked2" label="Option 2" />
    </div>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
</script>

```vue
<template>
	<div class="container">
		<m-checkbox id="my1" v-model="checked1" label="Option 1" />
		<m-checkbox id="my2" v-model="checked2" label="Option 2" />
	</div>
</template>

<script lang="ts" setup>
import { MCheckbox } from 'marvels-plus/src/';

import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
</script>
```

# API

## Props

| 参数  | 说明   | 类型             | 默认值 |
| ----- | ------ | ---------------- | ------ |
| value | 选项值 | [String, Number] | ——     |
| label | 选项   | [String, Number] | ——     |
