# Pagination 分页

<div style="margin: 60px">
    <MPagination v-model:active="active" :max="6"></MPagination>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(2);
</script>

```vue
<template>
	<MPagination v-model:active="active" :max="6"></MPagination>
</template>

<script lang="ts" setup>
import { MPagination } from 'marvels-plus/src/';
import { ref } from 'vue';

const active = ref(2);
</script>
```

# API

## Props

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| active | 激活值   | Number | 1      |
| max    | 最大页数 | Number | 1      |
