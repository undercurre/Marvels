# Rate 评分

<div style="margin: 60px">
    <MRate v-model:value="rate" @change="getRate"></MRate>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const rate = ref(2);
</script>

```vue
<template>
	<MRate v-model:value="rate" @change="getRate"></MRate>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const rate = ref(2);
</script>
```

# API

## Props

| 参数  | 说明   | 类型   | 默认值 |
| ----- | ------ | ------ | ------ |
| value | 当前值 | Number | ——     |

## Events

| 事件名称 | 说明           | 回调参数     |
| -------- | -------------- | ------------ |
| change   | 分值改变时触发 | rate: Number |
