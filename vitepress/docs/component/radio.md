# Radio 进度条

<div style="margin: 60px">
    <m-radio id="my1" v-model="checked1" label="Option 1" />
	<m-radio id="my2" v-model="checked2" label="Option 2" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';
const checked1 = ref(true);
const checked2 = ref(false);
</script>

```vue
<template>
	<m-radio id="my1" v-model="checked1" label="Option 1" />
	<m-radio id="my2" v-model="checked2" label="Option 2" />
</template>

<script lang="ts" setup>
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
