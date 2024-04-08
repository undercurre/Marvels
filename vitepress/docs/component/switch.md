# Switch 开关

<div style="margin: 60px">
    <MSwitch v-model:value="theme"></MSwitch>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const theme = ref(true);
</script>

```vue
<template>
	<MSwitch v-model:value="theme"></MSwitch>
</template>

<script lang="ts" setup>
import { MSwitch } from 'marvels-plus/src/';
import { ref } from 'vue';

const theme = ref(true);
</script>
```

# API

## Props

| 参数  | 说明   | 类型    | 默认值 |
| ----- | ------ | ------- | ------ |
| value | 开关值 | Boolean | false  |
