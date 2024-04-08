# Progress 进度条

<div style="margin: 60px">
    <MProgress :percentage="30"></MProgress>
</div>

```vue
<template>
	<MProgress :percentage="30"></MProgress>
</template>

<script lang="ts" setup>
import { MProgress } from 'marvels-plus/src/';
</script>
```

# API

## Props

| 参数       | 说明   | 类型   | 默认值 |
| ---------- | ------ | ------ | ------ |
| percentage | 进度值 | Number | 0      |
