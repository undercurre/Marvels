# Collapse 折叠面板

<div style="margin: 60px;">
	<MCollapse title="标题" :items="list" v-model:active="active"></MCollapse>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(false);

const list = ref(['link1', 'link2']);
</script>

```vue
<template>
	<MCollapse title="标题" :items="list" v-model:active="active"></MCollapse>
</template>

<script lang="ts" setup>
import { MCollapse } from 'marvels-plus/src/';
import { ref } from 'vue';

const active = ref(false);

const list = ref(['link1', 'link2']);
</script>
```

# API

## Props

| 参数  | 说明   | 类型   | 默认值 |
| ----- | ------ | ------ | ------ |
| list  | 展开项 | String | ——     |
| title | 标题   | String | ——     |
