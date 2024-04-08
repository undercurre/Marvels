# Tab 标签

<div style="margin: 60px">
    <MTab style="margin-top: 40px" :tabs="tabs"></MTab>
</div>

<script lang="ts" setup>
import { ref } from 'vue';
const tabs = ['标签一', '标签二', '标签三', '标签四'];
</script>

```vue
<template>
	<MTab style="margin-top: 40px" :tabs="tabs"></MTab>
</template>

<script lang="ts" setup>
import { MTab } from 'marvels-plus/src/';

const tabs = ['标签一', '标签二', '标签三', '标签四'];
</script>
```

# API

## Props

| 参数 | 说明     | 类型  | 默认值 |
| ---- | -------- | ----- | ------ |
| tabs | 标签列表 | Array | []     |
